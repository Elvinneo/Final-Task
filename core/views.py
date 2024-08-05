from django.shortcuts import render,redirect,get_object_or_404


def home_view(request):
    return render(request,'home.html')

def about_view(request):
    return render(request,'about.html')

def blog_view(request):
    return render(request,'blog.html')

def membership_view(request):
    return render(request,'membership.html')

def membership_detail_view(request):
    return render(request,'membership_detail.html')

def blogdetail_view(request):
    return render(request,'blogdetail.html')


