import { useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [searchId, setSearchId] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    designation: '',
    company: '',
    address: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.contact || !formData.email) {
      alert('Required fields missing')
      return
    }

    if (editingId) {
      let updated = []
      for (let i = 0; i < users.length; i++) {
        if (users[i].id === editingId) {
          updated.push({ ...users[i], ...formData })
        } else {
          updated.push(users[i])
        }
      }
      setUsers(updated)
      setEditingId(null)
    } else {
      let maxId = 0
      for (let i = 0; i < users.length; i++) {
        if (users[i].id > maxId) {
          maxId = users[i].id
        }
      }
      let newUser = { id: maxId + 1, ...formData }
      setUsers([...users, newUser])
    }

    setFormData({
      name: '',
      contact: '',
      email: '',
      designation: '',
      company: '',
      address: ''
    })
  }

  const handleDelete = (id) => {
    let answer = window.confirm('Delete?')
    if (answer) {
      let newUserList = []
      for (let i = 0; i < users.length; i++) {
        if (users[i].id !== id) {
          newUserList.push(users[i])
        }
      }
      setUsers(newUserList)
    }
  }

  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      contact: user.contact,
      email: user.email,
      designation: user.designation,
      company: user.company,
      address: user.address
    })
    setEditingId(user.id)
  }

  const handleCancel = () => {
    setEditingId(null)
    setFormData({
      name: '',
      contact: '',
      email: '',
      designation: '',
      company: '',
      address: ''
    })
  }

  let displayUsers = []
  for (let i = 0; i < users.length; i++) {
    if (searchId === '' || users[i].id.toString() === searchId) {
      displayUsers.push(users[i])
    }
  }

  return (
    <div className="app-container">
      <header className="header">
        <h1>User Management</h1>
      </header>

      <div className="main-content">
        <section className="form-section">
          <h2>{editingId ? 'Edit User' : 'Add New User'}</h2>
          <form onSubmit={handleSubmit} className="user-form">
            <div className="form-grid">
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Contact *</label>
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Designation</label>
                <input
                  type="text"
                  placeholder="Job designation"
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>
            </div>

            <div className="form-buttons">
              <button type="submit" className="btn btn-primary">
                {editingId ? 'Update' : 'Add'}
              </button>
              {editingId && (
                <button type="button" onClick={handleCancel} className="btn btn-secondary">
                  Cancel
                </button>
              )}
            </div>
          </form>
        </section>

        <section className="search-section">
          <h2>Search</h2>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by ID..."
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="search-input"
            />
            {searchId && (
              <button
                onClick={() => setSearchId('')}
                className="btn-clear"
              >
                Clear
              </button>
            )}
          </div>
        </section>

        <section className="table-section">
          <h2>Users ({displayUsers.length})</h2>

          {displayUsers.length > 0 ? (
            <div className="table-responsive">
              <table className="users-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Designation</th>
                    <th>Company</th>
                    <th>Address</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {displayUsers.map(user => (
                    <tr key={user.id}>
                      <td><span className="id-badge">{user.id}</span></td>
                      <td>{user.name}</td>
                      <td>{user.contact}</td>
                      <td>{user.email}</td>
                      <td>{user.designation}</td>
                      <td>{user.company}</td>
                      <td>{user.address}</td>
                      <td className="action-buttons">
                        <button
                          onClick={() => handleEdit(user)}
                          className="btn btn-edit"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="btn btn-delete"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="no-data">
              <p>No users found</p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default App
