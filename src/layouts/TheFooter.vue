<template>
  <footer class="footer">
    <div class="footer__contact">
      <a
        href="mailto:dlasolservices@gmail.com"
        aria-label="Send an email"
        title="Send an email"
        class="footer__link link text-white_emphasis--md"
      >
        <Icon type="md-mail" size="24"/>
      </a>
      <a
        href="https://www.instagram.com/dlasols/?utm_source=ig_profile_share&igshid=15wrsa1z8u1gu"
        target="__blank"
        aria-label="Go to Instagram"
        title="Go to Instagram"
        class="footer__link link text-white_emphasis--md"
      >
        <Icon type="logo-instagram" size="24"/>
      </a>
      <a
        href="https://wa.me/18137705964"
        aria-label="Chat on Whatsapp"
        title="Chat on Whatsapp"
        target="__blank"
        class="footer__link link text-white_emphasis--md"
      >
        <Icon type="logo-whatsapp" size="24"/>
      </a>
    </div>
    <div class="footer__copy text-white_emphasis--md text-align--center">&copy 2019 Dlasol</div>
  </footer>
</template>

<style>
.footer {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
}
.footer__contact {
  display: flex;
}
.footer__link {
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer__copy {
  margin: 0.9rem 0 0 0;
  font-weight: 300;
}
</style>

