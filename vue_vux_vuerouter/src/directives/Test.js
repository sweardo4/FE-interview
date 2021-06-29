export default {
    bind: function(el, binding) {
      el.src = binding.value ? binding.value : "/verifyCode.api";
      el.addEventListener("click", function(event) {
        el.src = el.src + "?t=" + new Date().getTime();
      });
    }
}