# Generated by Django 4.2.16 on 2024-10-25 12:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0005_remove_page_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='journal',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='index.journal'),
        ),
    ]
