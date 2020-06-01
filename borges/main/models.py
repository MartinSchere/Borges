from django.db import models


class CategoryModel(models.Model):
    title = models.CharField(max_length=30)

    def __str__(self):
        return self.title


class ProductModel(models.Model):
    category = models.ForeignKey(
        CategoryModel, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=100)
