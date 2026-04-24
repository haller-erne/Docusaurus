// Custom client module to fix hash-based scroll on page load/navigation
// Docusaurus SPA routing sometimes renders content after the browser's
// native hash-scroll, causing pages to open at the top instead of the anchor.
export function onRouteDidUpdate({location}) {
  if (location.hash) {
    // Small delay to ensure DOM is fully rendered
    setTimeout(() => {
      const id = decodeURIComponent(location.hash.substring(1));
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    }, 100);
  }
}
