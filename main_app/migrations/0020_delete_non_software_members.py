from django.db import migrations


def delete_non_software(apps, schema_editor):
    Member = apps.get_model('main_app', 'Member')
    Member.objects.filter(team__in=['business', 'design']).delete()


def noop(apps, schema_editor):
    pass


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0019_project_in_development'),
    ]

    operations = [
        migrations.RunPython(delete_non_software, noop),
    ]
