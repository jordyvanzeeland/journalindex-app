# Generated by Django 4.2.16 on 2024-10-25 10:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0002_category_page'),
    ]

    operations = [
        migrations.AlterField(
            model_name='page',
            name='category',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='index.category'),
        ),
        migrations.AlterField(
            model_name='page',
            name='journal',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='index.journal'),
        ),
    ]
