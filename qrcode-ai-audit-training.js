<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcode-ai-audit-trainingjs/1.0.0/qrcode-ai-audit-training.min.js"></script>
<div id="qrcode-ai-audit-training" style="margin:20px auto;text-align:center;"></div>
<script>
  const voteUrl = cfg.voteUrl || window.location.href.replace('index-page-ai-audit-training.html','vote-ai-audit-training.html');
  new QRCode(document.getElementById("qrcode-ai-audit-training"), {
    text: voteUrl,
    width: 200,
    height: 200
  });
</script>
