# Generated by Django 4.2.9 on 2024-04-29 11:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('learning', '0003_alter_lesson_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='lesson',
            name='description',
            field=models.TextField(default='', max_length=500),
            preserve_default=False,
        ),
    ]
