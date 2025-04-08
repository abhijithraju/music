async function postComment() {
    const name = document.getElementById('name').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (!name || !comment) {
      alert("Please fill out both fields.");
      return;
    }

    const response = await fetch('/submit', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name, comment })
    });

    const result = await response.json();
    if (result.status === 'success') {
      loadComments();
      document.getElementById('name').value = '';
      document.getElementById('comment').value = '';
    }
  }

  async function loadComments() {
    const res = await fetch('/comments');
    const data = await res.json();
    const container = document.getElementById('commentList');
    container.innerHTML = '';

    data.forEach(c => {
      container.innerHTML += `
        <div class="comment">
          <div class="meta"><strong>${c.name}</strong> · ${c.timestamp}</div>
          <div class="text">${c.comment}</div>
        </div>
      `;
    });
  }

  window.onload = loadComments;