from django.contrib import admin
from django.http.request import HttpRequest
from django.shortcuts import render
from django.urls import path, reverse
from django.utils.html import format_html
from .models import Journal, Page, Category

class HiddenAdmin(admin.ModelAdmin):
    def has_module_permission(self, request):
        return False
    
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('custom_title', 'description', 'journal')

    def custom_title(self, obj):
        url = reverse('admin:index_category_change', args=[obj.id])
        return format_html('<a style="color: #ffffff; padding: 5px 10px; background:' + obj.color + '" href="{}">{}</a>', url, obj.name)

class JournalAdmin(admin.ModelAdmin):
    list_display = ("custom_title", "description")

    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            path('view/<int:journalid>', self.admin_site.admin_view(self.journal_view), name="journal_view"),
        ]
        return custom_urls + urls
    
    def journal_view(self, request, journalid):
        journal = Journal.objects.get(id=journalid)
        pages = Page.objects.filter(journal=journalid)

        breadcrumbs = [
            {'url': reverse('admin:index'), "title": "Home"},
            {'url': reverse('admin:index_journal_changelist'), "title": "Journals"},
            {'url': reverse('admin:index_journal_change', args=[journalid]), "title": journal.name},
        ]
        
        context = dict(
            self.admin_site.each_context(request),
            journal=journal,
            pages = pages,
            breadcrumbs = breadcrumbs
        )
        return render(request, 'admin/journal_view.html', context)
    
    def custom_title(self, obj):
        url = reverse('admin:journal_view', args=[obj.id])
        return format_html('<a href="{}">{}</a>', url, obj.name)

admin.site.register(Page, HiddenAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Journal, JournalAdmin)
