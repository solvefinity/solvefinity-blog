/**
 * Clipboard.js
 * Adds a "Copy" button to all code blocks
 */

const addCopyButtons = () => {
  // Find all pre elements on the page
  const codeBlocks = document.querySelectorAll('pre');

  codeBlocks.forEach((block) => {
    // Check if it's already processed
    if (block.parentNode.classList.contains('code-block-wrapper')) return;

    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    
    // Insert wrapper before block, then move block into wrapper
    block.parentNode.insertBefore(wrapper, block);
    wrapper.appendChild(block);

    // Create button
    const button = document.createElement('button');
    button.className = 'copy-code-button';
    button.innerText = 'Copy';
    button.setAttribute('aria-label', 'Copy to clipboard');

    // Add click event
    button.addEventListener('click', async () => {
      const code = block.querySelector('code');
      const text = code ? code.innerText : block.innerText;

      try {
        await navigator.clipboard.writeText(text);
        
        // Feedback
        const originalText = button.innerText;
        button.innerText = 'Copied!';
        setTimeout(() => {
          button.innerText = originalText;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy!', err);
        button.innerText = 'Error';
      }
    });

    wrapper.appendChild(button);
  });
};

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addCopyButtons);
} else {
  addCopyButtons();
}
