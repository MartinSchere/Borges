# Generated by Django 3.0.5 on 2020-06-01 23:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_auto_20200531_1658'),
    ]

    operations = [
        migrations.AddField(
            model_name='productmodel',
            name='slider',
            field=models.BooleanField(default=1),
            preserve_default=False,
        ),
    ]
