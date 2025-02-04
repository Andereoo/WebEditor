from django.shortcuts import render
from django.http import HttpResponse
import json, os, re, glob
from urllib.parse import urljoin
from urllib.request import urlopen
from PIL import Image
from django.contrib.staticfiles import finders
from django.conf import settings

template = """
{{% extends "base.html" %}}
{{% load static %}}

{{% block head %}}
	<title>{0}</title>
{{% endblock %}}

{{% block content %}}
{1}
{{% endblock %}}
"""
blank_page = """
<div class="headerimage" style="background-image: url(/staticfiles/default.jpg)">
    <p class="headerimagetext" contenteditable="true">New page</p>
</div>
<div class="document">
</div>
"""

def main(request):
    data = {
    }
    return render(request, "main/main.html", data)

def page(request, slug):
    data = {
    }
    try:
        return render(request, "main/%s.html" % slug, data)
    except:
        return HttpResponse("Error: File does not exist.", content_type="text/plain")

def savemain(request):
    return save(request, "main")

def fetchimages(request):
    imagedir = os.path.join(settings.STATIC_ROOT, 'static/main/images/')
    images = {"images": []}
    for file in os.listdir(imagedir):
        images["images"].append(os.path.join("staticfiles/main/images/", file))
    return HttpResponse(json.dumps(images), content_type="application/json")

def setfavicon(request):
    if request.method == "POST":
        if request.body:
            url = request.body.decode("utf-8")
            image = urlopen(url)
            image = Image.open(image)
            locaction = finders.find('favicon2.png')
            print(settings.STATIC_ROOT)
            image.save(locaction)
    return HttpResponse()

def deleteimage(request):
    if request.method == "POST":
        if request.body:
            json_data = json.loads(request.body)
            path = json_data["url"].replace(urljoin(request.build_absolute_uri(), "/staticfiles"), os.path.join(settings.STATIC_ROOT, 'static'))
            os.remove(path)
    return HttpResponse()

def editimage(request):
    if request.method == "POST":
        if request.body:
            json_data = json.loads(request.body)
            path = json_data["url"].replace(urljoin(request.build_absolute_uri(), "/staticfiles"), os.path.join(settings.STATIC_ROOT, 'static'))
            if os.system('"C:\\Program Files\\Krita (x64)\\bin\\krita.exe " %s' % path) != 0:
                os.startfile(path)
    return HttpResponse()

def saveimage(request):
    if request.method == "POST":
        if request.body:
            json_data = json.loads(request.body)
            image = urlopen(json_data["url"])
            image = Image.open(image)
            image.save(os.path.join(settings.STATIC_ROOT, 'static', 'main', 'images', json_data["name"]+".png"))
            url = urljoin(request.build_absolute_uri(), "/staticfiles/main/images/"+json_data["name"]+".png")
            return HttpResponse(json.dumps({"url": url}), content_type="application/json")
    return HttpResponse()

def editpage(request):
    if request.method == "POST":
        if request.body:
            json_data = json.loads(request.body)
            oldpath = os.path.join(settings.BASE_DIR, 'main/templates/main/', "%s.html" % json_data["previous"])
            newpath = os.path.join(settings.BASE_DIR, 'main/templates/main/', "%s.html" % json_data["new"])
            try:
                if oldpath != "main":
                    os.rename(oldpath, newpath)
                else:
                    with open(newpath, "w+", encoding='utf-8') as handle:
                        handle.write(template.format("New page", blank_page))
            except OSError:
                with open(newpath, "w+", encoding='utf-8') as handle:
                    handle.write(template.format("New page", blank_page))
    return HttpResponse()

def save(request, slug):
    if request.method == "POST":
        if request.body:
            path = os.path.join(settings.BASE_DIR, 'main/templates/main/', "%s.html" % slug)
            base_path = os.path.join(settings.BASE_DIR, 'templates/base.html')
            uri = urljoin(request.build_absolute_uri(), "/staticfiles")
            json_data = json.loads(request.body)
            with open(base_path, "r+", encoding='utf-8') as handle:
                content = handle.read()
                content = re.sub(uri, "staticfiles", content, flags=re.DOTALL)
                content = re.sub("{% block header %}.*?{% endblock %}", "{{% block header %}}\n{}\n{{% endblock %}}".format(json_data["header"]), content, flags=re.DOTALL)
                content = re.sub("{% block footer %}.*?{% endblock %}", "{{% block footer %}}\n{}\n{{% endblock %}}".format(json_data["footer"]), content, flags=re.DOTALL)
            with open(base_path, "w+", encoding='utf-8') as handle:
                handle.write(content)
            with open(path, "w+", encoding='utf-8') as handle:
                content = template.format(json_data["title"], json_data["content"])
                content = re.sub(uri, "staticfiles", content, flags=re.DOTALL)
                handle.write(content)
    return HttpResponse()
