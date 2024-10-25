from django.db import models

class Journal(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    dateBegin = models.CharField(max_length=100)
    dateEnd = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=100)
    color = models.CharField(max_length=100)
    description = models.TextField()
    journal = models.ForeignKey(Journal, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name

class Page(models.Model):
    title = models.CharField(max_length=100)
    pagenumber = models.CharField(max_length=100)
    dateOfWriting = models.CharField(max_length=100)
    journal = models.OneToOneField(Journal, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)