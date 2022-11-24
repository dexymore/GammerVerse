
const Footer = () => {
  const year = new Date().getFullYear();

  return  <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
  <div class="container text-center">
    <small>made with ❤️ by <a className="masterBoss" href="https://www.facebook.com/ahmfd22/" target="_blank">AHMED FATHY</a></small>
  </div>
</footer>;
};

export default Footer;