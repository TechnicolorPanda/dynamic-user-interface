import { loadDropdownMenu } from './dropdown-menu';

(function initiatePage() {
  // set content
  const contentSection = document.querySelector('#content');
  loadDropdownMenu(contentSection);
}());
