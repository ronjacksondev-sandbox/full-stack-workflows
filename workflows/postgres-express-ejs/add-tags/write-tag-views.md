# Write tag views

### Add `new.ejs`
``` bash
touch src/views/pages/tags/new.ejs
```

### Write `new.ejs`

``` js
<div class="row">
  <div class="col-md-8 col-lg-6">
    <nav class="mb-3" aria-label="Breadcrumb">
      <a href="/tags" class="text-decoration-none">&larr; Back to tags</a>
    </nav>

    <h1><%= title %></h1>

    <form id="new-tag-form" class="mt-4">
      <div class="mb-3">
        <label for="name" class="form-label">Tag Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          name="name"
          required
          placeholder="e.g. urgent, work, personal"
        >
        <div class="form-text">Choose a descriptive name for your tag.</div>
      </div>

      <div id="errors" class="alert alert-danger d-none" role="alert"></div>

      <button type="submit" class="btn btn-primary">Create Tag</button>
      <a href="/tags" class="btn btn-outline-secondary ms-2">Cancel</a>
    </form>
  </div>
</div>

<%- script = `
  <script src="/js/new-tag.js"></script>
` %>
```

### Add `new-tag.js`
``` bash
touch public/js/new-tag.js
```

### Write `new-tag.js`
``` js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('new-tag-form');
  
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/tags', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const result = await response.json();
        window.location.href = '/tags/' + result.tag_id;
      } else {
        const errorData = await response.json();
        showErrors(errorData.errors);
      }
    } catch (error) {
      console.error('Error:', error);
      showErrors(['An unexpected error occurred']);
    }
  });

  function showErrors(errors) {
    const errorsDiv = document.getElementById('errors');
    errorsDiv.innerHTML = errors.map(error => '<div>' + error + '</div>').join('');
    errorsDiv.classList.remove('d-none');
  }
});

```

### Add `index.ejs`
``` bash
touch src/views/pages/tags/index.ejs
```

### Write `index.ejs`
``` js
<div class="d-flex justify-content-between align-items-center mb-4">
  <h1 class="mb-0"><%= title %></h1>
  <a href="/tags/new" class="btn btn-primary">New Tag</a>
</div>

<% if (tags && tags.length > 0) { %>
  <div class="row">
    <% tags.forEach(function(tag) { %>
      <div class="col-md-6 col-lg-4 mb-3">
        <div class="card h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">
              <span class="badge bg-primary fs-6"><%= tag.name %></span>
            </h5>
            <div class="mt-auto">
              <a href="/tags/<%= tag.tag_id %>" class="btn btn-outline-primary btn-sm">View Details</a>
              <a href="/tags/<%= tag.tag_id %>/edit" class="btn btn-outline-secondary btn-sm">Edit</a>
            </div>
          </div>
        </div>
      </div>
    <% }); %>
  </div>
<% } else { %>
  <div class="alert alert-light border text-center py-5" role="status">
    <p class="mb-2">You don't have any tags yet.</p>
    <a href="/tags/new" class="btn btn-primary">Create your first tag</a>
  </div>
<% } %>
```

### Add `show.ejs`
``` bash
touch src/views/pages/tags/show.ejs
```

### Write `show.ejs`
``` js
<div class="row" data-tag-id="<%= tag.tag_id %>">
  <div class="col-md-8 col-lg-6">
    <nav class="mb-3" aria-label="Breadcrumb">
      <a href="/tags" class="text-decoration-none">&larr; Back to tags</a>
    </nav>

    <div class="d-flex align-items-center gap-3 mb-4">
      <h1 class="mb-0">
        <span class="badge bg-primary fs-4"><%= tag.name %></span>
      </h1>
      <div class="ms-auto">
        <a href="/tags/<%= tag.tag_id %>/edit" class="btn btn-outline-secondary btn-sm">Edit</a>
        <button type="button" id="btn-delete" class="btn btn-outline-danger btn-sm ms-2">Delete</button>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h5 class="mb-0">Associated Tasks</h5>
      </div>
      <div class="card-body">
        <div id="tasks-loading" class="text-muted">Loading tasks…</div>
        <div id="tasks-content" class="d-none">
          <div id="tasks-list"></div>
          <div id="no-tasks" class="text-muted d-none">No tasks are tagged with "<%= tag.name %>".</div>
        </div>
      </div>
    </div>
  </div>
</div>

<%- script = `
  <script src="/js/tag-show.js"></script>
` %>
```

### Add `tag-show.js`
``` bash
touch public/js/tag-show.js
```

### Write `tag-show.js`
``` js
document.addEventListener('DOMContentLoaded', () => {
  const tagId = document.querySelector('[data-tag-id]')?.getAttribute('data-tag-id');
  
  if (!tagId) return;

  const tasksLoading = document.getElementById('tasks-loading');
  const tasksContent = document.getElementById('tasks-content');
  const tasksList = document.getElementById('tasks-list');
  const noTasks = document.getElementById('no-tasks');
  const btnDelete = document.getElementById('btn-delete');

  let tasks = [];

  async function loadTasks() {
    try {
      const response = await fetch('/tags/tasks/' + tagId + '/tags');
      if (response.ok) {
        tasks = await response.json();
        renderTasks();
      } else {
        tasksLoading.textContent = 'Error loading tasks.';
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
      tasksLoading.textContent = 'Error loading tasks.';
    }
  }

  function renderTasks() {
    tasksLoading.classList.add('d-none');
    tasksContent.classList.remove('d-none');

    if (tasks.length === 0) {
      noTasks.classList.remove('d-none');
      tasksList.innerHTML = '';
      return;
    }

    noTasks.classList.add('d-none');
    tasksList.innerHTML = tasks.map(task => `
      <div class="d-flex justify-content-between align-items-center border-bottom py-2">
        <div class="d-flex align-items-center gap-2">
          <span class="badge ${task.completed ? 'bg-success' : 'bg-secondary'} rounded-pill">
            ${task.completed ? 'Done' : 'To do'}
          </span>
          <a href="/tasks/${task.task_id}" class="text-decoration-none ${task.completed ? 'text-decoration-line-through text-muted' : ''}">
            ${task.title}
          </a>
        </div>
        ${task.due_date ? '<small class="text-muted">' + new Date(task.due_date).toLocaleDateString() + '</small>' : ''}
      </div>
    `).join('');
  }

  // Delete tag
  if (btnDelete) {
    btnDelete.addEventListener('click', async () => {
      if (!confirm('Are you sure you want to delete this tag? This will remove it from all associated tasks.')) {
        return;
      }

      try {
        const response = await fetch('/tags/' + tagId, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          window.location.href = '/tags';
        } else {
          alert('Error deleting tag.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error deleting tag.');
      }
    });
  }

  loadTasks();
});

```

### Add `edit.ejs`
``` bash
touch src/views/pages/tags/edit.ejs
```

### Write `edit.ejs`
``` js
<div class="row">
  <div class="col-md-8 col-lg-6">
    <nav class="mb-3" aria-label="Breadcrumb">
      <a href="/tags/<%= tag.tag_id %>" class="text-decoration-none">&larr; Back to tag</a>
    </nav>

    <h1><%= title %></h1>

    <form id="edit-tag-form" class="mt-4" data-tag-id="<%= tag.tag_id %>">
      <div class="mb-3">
        <label for="name" class="form-label">Tag Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          name="name"
          required
          placeholder="e.g. urgent, work, personal"
          value="<%= tag.name %>"
        >
        <div class="form-text">Choose a descriptive name for your tag.</div>
      </div>

      <div id="errors" class="alert alert-danger d-none" role="alert"></div>

      <button type="submit" class="btn btn-primary">Update Tag</button>
      <a href="/tags/<%= tag.tag_id %>" class="btn btn-outline-secondary ms-2">Cancel</a>
    </form>
  </div>
</div>

<%- script = `
  <script src="/js/edit-tag.js"></script>
` %>
```

### Add `edit-tag.js`
``` bash
touch public/js/edit-tag.js
```

### Write `edit-tag.js`
``` js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('edit-tag-form');
  
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const tagId = e.target.dataset.tagId;

    try {
      const response = await fetch('/tags/' + tagId, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        window.location.href = '/tags/' + tagId;
      } else {
        const errorData = await response.json();
        showErrors(errorData.errors);
      }
    } catch (error) {
      console.error('Error:', error);
      showErrors(['An unexpected error occurred']);
    }
  });

  function showErrors(errors) {
    const errorsDiv = document.getElementById('errors');
    errorsDiv.innerHTML = errors.map(error => '<div>' + error + '</div>').join('');
    errorsDiv.classList.remove('d-none');
  }
});

```

### Modify `taskViewController.js`

#### `tasksListPage()`
``` js
import { findTasksByUserId, findTaskByTaskId } from "../models/task.js";
import { findTagsByTaskId, findTagsByUserId } from "../models/tag.js";
```
- Add logic just before `res.render()`
``` js
  // Load tags for each task
  if (tasks && tasks.length > 0) {
    for (const task of tasks) {
      task.tags = await findTagsByTaskId(task.task_id);
    }
  }
```

#### `newTaskPage()`
```js
export async function newTaskPage(req, res) {
  const userId = res.locals.currentUser?.user_id;
  const allTags = userId ? await findTagsByUserId(userId) : [];

  res.render("pages/tasks/new", {
    title: "Create Task",
    user: res.locals.currentUser,
    allTags: allTags
  });
}
```

#### `editTaskPage()`
``` js
export async function editTaskPage(req, res) {
  const { id } = req.params;
  const userId = res.locals.currentUser?.user_id;

  // Get the task
  const task = await findTaskByTaskId(id);
  if (!task || task.user_id !== userId) {
    return res.status(404).render("pages/error", {
      message: "Task not found"
    });
  }

  // Get tags for this task and all available tags
  const currentTags = await findTagsByTaskId(id);
  const allTags = await findTagsByUserId(userId);

  res.render("pages/tasks/edit", {
    title: "Edit Task",
    user: res.locals.currentUser,
    taskId: id,
    task: task,
    currentTags: currentTags,
    allTags: allTags
  });
}
```

### Add `<div>` for tags to `tasks/show.ejs`
- Add on line 20 below `<h1>`
``` js
<div id="task-tags" class="mb-3"></div>
```

### Modify `task-show.js`
``` js
const tagsEl = document.getElementById("task-tags");
```
- Add `loadTags()` as the last line of `showContent()`
``` js
loadTags(taskId);
```
- Add `loadTags()` and `displayTags()` functions
``` js
  async function loadTags(taskId) {
    try {
      const res = await fetch(`/tags/tasks/${taskId}/tags`);
      if (res.ok) {
        const tags = await res.json();
        displayTags(tags);
      }
    } catch (error) {
      console.error('Error loading tags:', error);
    }
  }

  function displayTags(tags) {
    if (!tags || tags.length === 0) {
      tagsEl.innerHTML = '<dt class="col-sm-3 text-muted">Tags</dt><dd class="col-sm-9">—</dd>';
      return;
    }

    const tagsHtml = tags.map(tag =>
      `<a href="/tags/${tag.tag_id}" class="badge bg-primary text-decoration-none me-1" title="View tag details">${tag.name}</a>`
    ).join('');

    tagsEl.innerHTML = `
      <dt class="col-sm-3 text-muted">Tags</dt>
      <dd class="col-sm-9">${tagsHtml}</dd>
    `;
  }
```

### Add `tagBadges.ejs`
``` bash
touch src/views/partials/tags/tagBadges.ejs`
```

### Write `tagBadges.ejs`
``` js
<%
  // Expects: tags (array of tag objects with tag_id and name)
  // Optional: taskId (for linking to tag pages)
%>
<% if (typeof tags !== 'undefined' && tags && tags.length > 0) { %>
  <div class="d-flex flex-wrap gap-1 mb-2">
    <% tags.forEach(function(tag) { %>
      <% if (typeof taskId !== 'undefined') { %>
        <a href="/tags/<%= tag.tag_id %>" class="badge bg-primary text-decoration-none" title="View tag details">
          <%= tag.name %>
        </a>
      <% } else { %>
        <span class="badge bg-primary">
          <%= tag.name %>
        </span>
      <% } %>
    <% }); %>
  </div>
<% } %>
```

### Add `tagBadges.ejs` partial to `tasks/index.ejs`
- Add on line 19 after `</a>`
``` js
<%- include("../../partials/tags/tagBadges", { tags: task.tags || [], taskId: task.task_id }) %>
```

### Write `tagSelector.ejs`

``` js
<%
  // Expects: taskId (required), currentTags (array of current tag objects), allTags (array of all available tags)
%>
<% if (taskId !== 'new') { %>
<div class="mb-3">
  <label class="form-label">Tags</label>
  <div id="tag-selector-<%= taskId %>" class="tag-selector">
    <div id="current-tags-<%= taskId %>" class="d-flex flex-wrap gap-1 mb-2">
      <% if (typeof currentTags !== 'undefined' && currentTags && currentTags.length > 0) { %>
        <% currentTags.forEach(function(tag) { %>
          <span class="badge bg-primary d-flex align-items-center gap-1">
            <%= tag.name %>
            <button type="button" class="btn-close btn-close-white btn-close-sm ms-1 remove-tag"
                    data-task-id="<%= taskId %>"
                    data-tag-id="<%= tag.tag_id %>"
                    aria-label="Remove tag" title="Remove tag"></button>
          </span>
        <% }); %>
      <% } %>
    </div>

    <div class="input-group">
      <select id="tag-select-<%= taskId %>" class="form-select add-tag" data-task-id="<%= taskId %>">
        <option value="">Add a tag...</option>
        <% if (typeof allTags !== 'undefined' && allTags) { %>
          <% allTags.forEach(function(tag) { %>
            <% const isAlreadyAssigned = currentTags && currentTags.some(ct => ct.tag_id === tag.tag_id); %>
            <% if (!isAlreadyAssigned) { %>
              <option value="<%= tag.tag_id %>"><%= tag.name %></option>
            <% } %>
          <% }); %>
        <% } %>
      </select>
      <a href="/tags/new" class="btn btn-outline-secondary" target="_blank" title="Create new tag">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
      </a>
    </div>
  </div>
</div>
<% } else { %>
<div class="mb-3">
  <label class="form-label">Tags</label>
  <div class="form-text">Tags can be added after creating the task.</div>
</div>
<% } %>

<% if (taskId !== 'new') { %>
<%- script = `
  <script src="/js/tag-selector.js"></script>
` %>
<% } %>
```

### Add `tag-selector.js`
``` bash
touch public/js/tag-selector.js
```

### Write `tag-selector.js`
``` js
async function addTag(taskId, tagId) {
  if (!tagId) return;

  try {
    const response = await fetch('/tags/tasks/' + taskId + '/tags/' + tagId, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      const result = await response.json();
      // Reload the page to refresh the tag selector
      window.location.reload();
    } else {
      console.error('Error adding tag');
      alert('Error adding tag. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error adding tag. Please try again.');
  }

  // Reset the select dropdown
  const select = document.getElementById('tag-select-' + taskId);
  if (select) {
    select.value = '';
  }
}

async function removeTag(taskId, tagId) {
  if (!confirm('Remove this tag from the task?')) return;

  try {
    const response = await fetch('/tags/tasks/' + taskId + '/tags/' + tagId, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      // Reload the page to refresh the tag selector
      window.location.reload();
    } else {
      console.error('Error removing tag');
      alert('Error removing tag. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error removing tag. Please try again.');
  }
}

// Initialize event listeners when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Handle tag selection dropdown changes
  const tagSelects = document.querySelectorAll('.add-tag');
  tagSelects.forEach(select => {
    select.addEventListener('change', function() {
      const taskId = this.getAttribute('data-task-id');
      const tagId = this.value;
      if (tagId) {
        addTag(taskId, tagId);
      }
    });
  });

  // Handle tag removal buttons
  const removeButtons = document.querySelectorAll('.remove-tag');
  removeButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const taskId = this.getAttribute('data-task-id');
      const tagId = this.getAttribute('data-tag-id');
      removeTag(taskId, tagId);
    });
  });
});

```

### Add `tagSelector` partial to `tasks/edit.ejs`
- Add to line 52 above errors `<div>`
``` js
<%- include("../../partials/tags/tagSelector", { taskId: taskId, currentTags: currentTags, allTags: allTags }) %>
```

### Add `tagSelector` partial to `tasks/new.ejs`
- Add on line 41 just above errors `<div>`
``` js
<%- include("../../partials/tags/tagSelector", { taskId: 'new', currentTags: [], allTags: allTags }) %>
```

### Add tag link in nav in `header.ejs`
``` js
<a class="nav-link" href="/tags">View Tags</a>
```

### Commit
``` bash
git add .
git commit -m 'Adds tag views'
```

### Deploy
``` bash
git push
```