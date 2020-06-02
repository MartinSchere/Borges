from graphene_django import DjangoObjectType
import graphene
from .models import ProductModel, CategoryModel


class CategoryType(DjangoObjectType):
    class Meta:
        model = CategoryModel


class ProductType(DjangoObjectType):
    class Meta:
        model = ProductModel


class Query(graphene.ObjectType):
    products = graphene.List(ProductType)
    categories = graphene.List(CategoryType)

    def resolve_products(self, info):
        return ProductModel.objects.all()

    def resolve_categories(self, info):
        return CategoryModel.objects.all()


schema = graphene.Schema(query=Query)
