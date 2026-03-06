# Write task views

### Add `new.ejs`
``` bash
touch src/views/pages/tasks/new.ejs
```

### Write `new.ejs`
``` html
<div class="row">
  <div class="col-md-8 col-lg-6">
    <h1><%= title %></h1>

    <form id="new-task-form" class="mt-4">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          name="title"
          required
          placeholder="e.g. Buy groceries"
        >
      </div>

      <div class="mb-3">
        <label for="due_date" class="form-label">Due date</label>
        <input
          type="date"
          class="form-control"
          id="due_date"
          name="due_date"
        >
        <div class="form-text">Optional. Leave blank if there is no specific due date.</div>
      </div>

      <div class="form-check mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="completed"
          name="completed"
        >
        <label class="form-check-label" for="completed">
          Mark as completed
        </label>
      </div>

      <div id="errors" class="alert alert-danger d-none" role="alert"></div>

      <button type="submit" class="btn btn-primary">Create Task</button>
      <a href="/tasks" class="btn btn-outline-secondary ms-2">Cancel</a>
    </form>
  </div>
</div>

<%- script = `
  <script src="/js/new-task.js"></script>
` %>
```

### Add `new-task.js`
``` bash
touch public/js/new-task.js
```

### Write `new-task.js`
``` js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("new-task-form");
  const errorsEl = document.getElementById("errors");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    errorsEl.classList.add("d-none");
    errorsEl.innerHTML = "";

    const title = form.title.value.trim();
    const dueDate = form.due_date.value ? form.due_date.value : null;
    const completed = form.completed.checked;

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          ...(dueDate ? { due_date: dueDate } : {}),
          ...(completed ? { completed } : {}),
        }),
      });

      if (!response.ok) {
        let data = {};
        try {
          data = await response.json();
        } catch (_) {
          // ignore JSON parse errors
        }

        const errors = data.errors || [data.error || "Something went wrong creating the task."];

        errorsEl.innerHTML =
          '<ul class="mb-0">' +
          errors.map((e) => `<li>${e}</li>`).join("") +
          "</ul>";
        errorsEl.classList.remove("d-none");
        return;
      }

      window.location.href = "/tasks";
    } catch (error) {
      errorsEl.textContent = "Network error. Please try again.";
      errorsEl.classList.remove("d-none");
    }
  });
});

```

### Add `index.ejs`
``` bash
touch src/views/pages/tasks/index.ejs
```

### Write `index.ejs`
``` html
<div class="d-flex justify-content-between align-items-center mb-4">
  <h1 class="mb-0"><%= title %></h1>
  <a href="/tasks/new" class="btn btn-primary">New Task</a>
</div>

<% if (tasks && tasks.length > 0) { %>
  <div class="list-group">
    <% tasks.forEach(function(task) { %>
      <div class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center gap-2">
          <a href="/tasks/<%= task.task_id %>" class="link-body-emphasis text-decoration-none">
            <% if (task.completed) { %>
              <span class="badge bg-success rounded-pill">Done</span>
            <% } else { %>
              <span class="badge bg-secondary rounded-pill">To do</span>
            <% } %>
            <span class="<%= task.completed ? 'text-decoration-line-through text-muted' : '' %>"><%= task.title %></span>
          </a>
        </div>
        <% if (task.due_date) { %>
          <small class="text-muted"><%= new Date(task.due_date).toLocaleDateString() %></small>
        <% } %>
      </div>
    <% }); %>
  </div>
<% } else { %>
  <div class="alert alert-light border text-center py-5" role="status">
    <p class="mb-2">You don't have any tasks yet.</p>
    <a href="/tasks/new" class="btn btn-primary">Create your first task</a>
  </div>
<% } %>

```

### Add `show.ejs`
``` bash
touch src/views/pages/tasks/show.ejs
```

### Write `show.ejs`
``` html
<div class="row" data-task-id="<%= taskId %>">
  <div class="col-md-8 col-lg-6">
    <nav class="mb-3" aria-label="Breadcrumb">
      <a href="/tasks" class="text-decoration-none">&larr; Back to tasks</a>
    </nav>

    <div id="loading" class="text-muted">Loading task…</div>

    <div id="task-not-found" class="alert alert-warning d-none" role="alert">
      Task not found.
      <a href="/tasks" class="alert-link">Return to your tasks</a>
    </div>

    <div id="task-content" class="d-none">
      <h1 class="mb-3">
        <span id="task-title"></span>
        <span id="task-badge" class="badge rounded-pill ms-2"></span>
      </h1>

      <dl class="row mb-4">
        <dt class="col-sm-3 text-muted">Due date</dt>
        <dd class="col-sm-9" id="task-due-date">—</dd>
      </dl>

      <div class="d-flex flex-wrap gap-2">
        <a id="btn-edit" href="#" class="btn btn-primary">Edit</a>
        <button type="button" id="btn-complete" class="btn btn-success d-none">Mark complete</button>
        <button type="button" id="btn-delete" class="btn btn-outline-danger ms-auto">Delete</button>
      </div>
    </div>
  </div>
</div>

<%- script = `
  <script src="/js/task-show.js"></script>
` %>

```

### Add `task-show.js`
``` bash
touch public/js/task-show.js
```

### Write `task-show.js`
``` js
document.addEventListener("DOMContentLoaded", async () => {
  const taskId = document.querySelector("[data-task-id]")?.getAttribute("data-task-id");
  if (!taskId) return;

  document.getElementById("btn-edit").href = `/tasks/${taskId}/edit`;

  const loading = document.getElementById("loading");
  const notFound = document.getElementById("task-not-found");
  const content = document.getElementById("task-content");
  const titleEl = document.getElementById("task-title");
  const badgeEl = document.getElementById("task-badge");
  const dueDateEl = document.getElementById("task-due-date");
  const btnComplete = document.getElementById("btn-complete");
  const btnDelete = document.getElementById("btn-delete");

  function showContent(task) {
    loading.classList.add("d-none");
    notFound.classList.add("d-none");
    content.classList.remove("d-none");

    titleEl.textContent = task.title;
    if (task.completed) {
      titleEl.classList.add("text-decoration-line-through", "text-muted");
      badgeEl.textContent = "Done";
      badgeEl.className = "badge bg-success rounded-pill ms-2";
    } else {
      titleEl.classList.remove("text-decoration-line-through", "text-muted");
      badgeEl.textContent = "To do";
      badgeEl.className = "badge bg-secondary rounded-pill ms-2";
      btnComplete.classList.remove("d-none");
    }
    dueDateEl.textContent = task.due_date
      ? new Date(task.due_date).toLocaleDateString()
      : "—";
  }

  function showNotFound() {
    loading.classList.add("d-none");
    content.classList.add("d-none");
    notFound.classList.remove("d-none");
  }

  try {
    const res = await fetch(`/api/tasks/${taskId}`);
    if (!res.ok) {
      showNotFound();
      return;
    }
    const task = await res.json();
    showContent(task);
  } catch (_) {
    showNotFound();
    return;
  }

  btnComplete.addEventListener("click", async () => {
    btnComplete.disabled = true;
    try {
      const res = await fetch(`/api/tasks/${taskId}/complete`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: true }),
      });
      if (res.ok) window.location.reload();
    } finally {
      btnComplete.disabled = false;
    }
  });

  btnDelete.addEventListener("click", async () => {
    if (!confirm("Delete this task?")) return;
    btnDelete.disabled = true;
    try {
      const res = await fetch(`/api/tasks/${taskId}`, { method: "DELETE" });
      if (res.ok) window.location.href = "/tasks";
    } finally {
      btnDelete.disabled = false;
    }
  });
});

```

### Add `edit.ejs`
``` bash
touch src/views/pages/tasks/edit.ejs
```

### Write `edit.ejs`
``` html
<div class="row">
  <div class="col-md-8 col-lg-6">
    <nav class="mb-3" aria-label="Breadcrumb">
      <a id="back-link" href="#" class="text-decoration-none">&larr; Back to task</a>
    </nav>

    <h1><%= title %></h1>

    <div id="loading" class="text-muted mt-4">Loading task…</div>

    <div id="task-not-found" class="alert alert-warning mt-4 d-none" role="alert">
      Task not found.
      <a href="/tasks" class="alert-link">Return to your tasks</a>
    </div>

    <form id="edit-task-form" class="mt-4 d-none" data-task-id="<%= taskId %>">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          name="title"
          required
          placeholder="e.g. Buy groceries"
        >
      </div>

      <div class="mb-3">
        <label for="due_date" class="form-label">Due date</label>
        <input
          type="date"
          class="form-control"
          id="due_date"
          name="due_date"
        >
        <div class="form-text">Optional. Leave blank if there is no specific due date.</div>
      </div>

      <div class="form-check mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="completed"
          name="completed"
        >
        <label class="form-check-label" for="completed">
          Completed
        </label>
      </div>

      <div id="errors" class="alert alert-danger d-none" role="alert"></div>

      <div class="d-flex flex-wrap gap-2 align-items-center">
        <button type="submit" class="btn btn-primary">Save changes</button>
        <a id="btn-cancel" href="#" class="btn btn-outline-secondary">Cancel</a>
        <button type="button" id="btn-delete" class="btn btn-outline-danger ms-auto">Delete task</button>
      </div>
    </form>
  </div>
</div>

<%- script = `
  <script src="/js/task-edit.js"></script>
` %>

```

### Add `task-edit.js`
```bash
touch public/js/task-edit.js
```

### Write `task-edit.js`
``` js
document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("edit-task-form");
  const taskId = form?.getAttribute("data-task-id");
  if (!taskId) return;

  const loading = document.getElementById("loading");
  const notFound = document.getElementById("task-not-found");
  const errorsEl = document.getElementById("errors");
  const backLink = document.getElementById("back-link");
  const btnCancel = document.getElementById("btn-cancel");
  const btnDelete = document.getElementById("btn-delete");

  backLink.href = `/tasks/${taskId}`;
  btnCancel.href = `/tasks/${taskId}`;

  try {
    const res = await fetch(`/api/tasks/${taskId}`);
    if (!res.ok) {
      loading.classList.add("d-none");
      notFound.classList.remove("d-none");
      return;
    }
    const task = await res.json();

    loading.classList.add("d-none");
    notFound.classList.add("d-none");
    form.classList.remove("d-none");

    form.title.value = task.title;
    form.due_date.value = task.due_date ? task.due_date.slice(0, 10) : "";
    form.completed.checked = !!task.completed;
  } catch (_) {
    loading.classList.add("d-none");
    notFound.classList.remove("d-none");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorsEl.classList.add("d-none");
    errorsEl.innerHTML = "";

    const title = form.title.value.trim();
    const due_date = form.due_date.value || null;
    const completed = form.completed.checked;

    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, due_date, completed }),
      });

      if (!response.ok) {
        let data = {};
        try {
          data = await response.json();
        } catch (_) {}
        const errors = data.errors || [data.error || "Something went wrong."];
        errorsEl.innerHTML =
          "<ul class=\"mb-0\">" + errors.map((e) => `<li>${e}</li>`).join("") + "</ul>";
        errorsEl.classList.remove("d-none");
        return;
      }
      window.location.href = `/tasks/${taskId}`;
    } catch (_) {
      errorsEl.textContent = "Network error. Please try again.";
      errorsEl.classList.remove("d-none");
    }
  });

  btnDelete.addEventListener("click", async () => {
    if (!confirm("Delete this task? This cannot be undone.")) return;
    btnDelete.disabled = true;
    try {
      const res = await fetch(`/api/tasks/${taskId}`, { method: "DELETE" });
      if (res.ok) window.location.href = "/tasks";
    } finally {
      btnDelete.disabled = false;
    }
  });
});

```

### Commit
``` bash
git add .
git commit -m 'Adds task views'
```

Next:  
[Next Section - Deploy](../deploy/overview.md)