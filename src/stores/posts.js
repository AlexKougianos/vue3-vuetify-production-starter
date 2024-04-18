// ~/src/stores/posts.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const usePostsStore = defineStore('posts', () => {
  // State
  const posts = ref([])

  // Actions

  // Βάζουμε async / await γιατί η api κλήση είναι ασύγχρονη
  const fetchPosts = async () => {
    // Οι HTTPS κλήσεις, όπως η axios.get επιστρέφουν ένα response ή ένα error
    // Τη διαχείριση σφαλμάτων θα τη δούμε αργότερα
    // Από το response, θέλουμε μόνο τα data
    const { data } = await axios.get('/posts')

    // Ενημέρωση του value του posts ref με τα δεδομένα της κλήσης
    posts.value = data.slice(0, 5)
  }

  const createPost = async (title) => {
    // Προσθήκη του post στη βάση δεδομένων με κλήση post
    // Θα επιστραφεί ένα μοναδικό id που θα αντιπροσωπεύει το post
    const { id } = await axios.post('/posts', { title })

    // Προσθήκη του post στα δεδομένα του store
    posts.value.push({ id, title })
  }

  const updatePost = async (post) => {
    // Ενημέρωση της βάσης δεδομένων με κλήση put,
    // χρησιμοποιώντας το id του post σαν παράμετρο
    await axios.put(`/posts/${post.id}`, post)

    // Ενημέρωση του post στα posts
    posts.value = posts.value.map((p) => {
      if (p.id === post.id) {
        return post
      }
      return p
    })
  }

  const deletePost = async (id) => {
    // Διαγραφή του post από τη βάση με κλήση delete
    // Αντίστοιχα με την επεξεργασία, βάζουμε το id σαν παράμετρο
    await axios.delete(`/posts/${id}`)

    // Διαγραφή του post από τα posts του store
    posts.value = posts.value.filter((p) => p.id !== id)
  }

  return {
    posts,
    fetchPosts,
    createPost,
    updatePost,
    deletePost
  }
})
