# Generated by Django 4.2.17 on 2025-02-22 02:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('learning', '0027_lessonvideo'),
    ]

    operations = [
        migrations.RenameField(
            model_name='lessonvideo',
            old_name='video_link',
            new_name='video_embed_link',
        ),
    ]
