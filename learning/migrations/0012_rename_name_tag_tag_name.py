# Generated by Django 4.2.11 on 2024-04-30 11:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('learning', '0011_tag_alter_lesson_skills_lesson_tags'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tag',
            old_name='name',
            new_name='tag_name',
        ),
    ]
