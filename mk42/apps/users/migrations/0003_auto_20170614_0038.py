# -*- coding: utf-8 -*-

# mk42
# mk42/apps/users/migrations/0003_auto_20170614_0038.py

# Generated by Django 1.11.2 on 2017-06-14 00:38

from __future__ import unicode_literals

from django.db import (
    migrations,
    models,
)


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0002_auto_20170613_2124"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="language",
            field=models.CharField(choices=[("en", "English"), ("uk", "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430")], default="en", max_length=5, verbose_name="language"),
        ),
    ]
