# Generated by Django 4.2.11 on 2024-05-02 02:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('learning', '0020_alter_tag_options_alter_lesson_extension_lesson_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='lesson',
            options={'ordering': [models.Case(models.When(required_lesson=True, then=1), models.When(core_lesson=True, then=2), models.When(extension_lesson=True, then=3), default=4, output_field=models.IntegerField())]},
        ),
    ]
