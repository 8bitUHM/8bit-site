# Generated by Django 4.2.11 on 2024-04-30 05:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('learning', '0006_section_lesson'),
    ]

    operations = [
        migrations.AlterField(
            model_name='section',
            name='lesson',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='lessons', to='learning.lesson'),
        ),
    ]
