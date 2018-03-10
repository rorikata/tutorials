from django.shortcuts import render, get_object_or_404, redirect, render_to_response
from django.http import HttpResponse
from django.template import RequestContext
from app1.models import Ipaddress
from app1.forms import IpaddressForm
import logging

logger = logging.getLogger(__name__)
# Create your views here.

def ipaddress(request):
#    return HttpResponse("Hello Django")
    # データベース上のIPアドレス情報を配列型で取得
    ipaddresses = Ipaddress.objects.all().order_by('id')
    logger.debug('here')
    return render(
        request,
        'ipaddresses.html', # テンプレート名
        context = { 'ipaddresses': ipaddresses }, # 取得したIPアドレス情報をテンプレート内の変数に代入
        )

def ipaddress_change(request, ipaddress_id=None):
    logger.debug('herewego')
    if ipaddress_id:
        ipaddress = get_object_or_404(Ipaddress, pk=ipaddress_id)
    else:
        ipaddress = Ipaddress()

    if request.method == 'POST':
        # 基本的にPOSTが推奨される
        form = IpaddressForm(request.POST, instance=ipaddress)
        if form.is_valid():
            form = form.save(commit=False)
            form.save()
            logger.debug("test")
            return redirect('app1:ipaddress')
    else:
        # GETの場合はこちらを実行
        logger.debug("test2")
        form = IpaddressForm(instance=ipaddress)
    logger.debug("test2")
    return render(
        request,
        'ipaddress_change.html',
        dict(form=form, ipaddress_id=ipaddress_id)
        )
