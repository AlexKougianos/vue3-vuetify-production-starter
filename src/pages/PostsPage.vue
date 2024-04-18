<!-- ~/src/pages/PostsPage.vue -->
<template>
  <h1>Posts Page</h1>

  <!-- Πεδίο Προσθήκης -->
  <v-text-field
    v-model="newPostTitle"
    type="text"
    placeholder="Προσθήκη Post"
    class="mt-4"
    clearable
  />

  <v-btn color="primary" @click="postsStore.createPost(newPostTitle)">
    Υποβολη
  </v-btn>

  <!-- Λίστα Posts -->
  <v-card
    v-for="post in postsStore.posts"
    :key="post.id"
    :title="post.title"
    class="my-4"
    width="500px"
  >
    <template #append>
      <!-- Κουμπί Επεξεργασίας -->
      <v-btn
        icon
        color="grey-lighten-3"
        class="mr-2"
        size="small"
        @click="editPost = { ...post }"
      >
        <v-icon icon="mdi-pen" />
      </v-btn>

      <!-- Κουμπί Διαγραφής -->
      <v-btn
        icon
        size="small"
        color="red"
        @click="postsStore.deletePost(post.id)"
      >
        <v-icon icon="mdi-delete" />
      </v-btn>
    </template>
  </v-card>

  <!-- Αναδυόμενο Πλαίσιο Επεξεργασίας -->
  <v-dialog v-model="editPost.id" width="auto">
    <v-card width="400" prepend-icon="mdi-pen" title="Επεξεργασία">
      <v-card-text>
        <v-text-field
          v-model="editPost.title"
          label="Τίτλος"
          hide-details="true"
        />
      </v-card-text>

      <v-card-actions class="px-6">
        <v-btn
          class="ml-auto"
          @click="
            editPost = {
              id: null,
              title: null,
            }
          "
        >
          ακυρωση
        </v-btn>

        <v-btn color="primary" @click="postsStore.updatePost(editPost)">
          αποθηκευση
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { usePostsStore } from "@/stores/posts";

const postsStore = usePostsStore();

onMounted(() => {
  postsStore.fetchPosts();
});

const newPostTitle = ref(null);

const editPost = ref({
  id: null,
  title: null,
});
</script>
