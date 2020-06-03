from django.db import models


class CategoryModel(models.Model):
    title = models.CharField(max_length=30)

    def __str__(self):
        return self.title


class ProductModel(models.Model):
    category = models.ForeignKey(
        CategoryModel, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=100)
    slider = models.BooleanField()
    slider_image = models.ImageField(
        upload_to='product_images/slider_images', null=True, blank=True)
    preview_image = models.ImageField(
        upload_to='product_images/preview_images')
    descripcion_corta = models.TextField()
    contenido = models.TextField()

    def __str__(self):
        return self.title
