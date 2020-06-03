from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.contrib.auth import authenticate, login, logout
from .models import ProductModel, CategoryModel
from django.contrib import messages
from django.views.generic.edit import UpdateView, CreateView, DeleteView


@login_required
def dashboard(request):
    ctx = {
        'user': request.user,
        'products': ProductModel.objects.all(),
        'categories': CategoryModel.objects.all()
    }
    return render(request, 'main/dashboard.html', ctx)


class ProductUpdateView(UpdateView):
    model = ProductModel
    fields = ['category',
              'title',
              'slider',
              'descripcion_corta',
              # 'slider_image',
              # 'preview_image',
              'contenido', ]
    template_name = 'main/product_detail.html'
    @method_decorator(login_required)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)


class ProductCreateView(CreateView):
    model = ProductModel
    fields = ['category',
              'title',
              'slider',
              'descripcion_corta',
              # 'slider_image',
              # 'preview_image',
              'contenido', ]
    template_name = 'main/product_create.html'
    success_url = '/'
    @method_decorator(login_required)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)


class ProductDeleteView(DeleteView):
    model = ProductModel
    success_url = '/'
    @method_decorator(login_required)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)


def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect(dashboard)
        else:
            messages.error(request, 'Usuario o contraseña inválidos')
            return render(request, 'main/login.html')
    else:
        return render(request, 'main/login.html')


def logout_view(request):
    messages.info(request, 'Se cerró la sesión')
    logout(request)
    return redirect(login_view)
