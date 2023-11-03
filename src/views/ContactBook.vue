<template>
  <div class="page row">
    <div class="col-md-12">
      <input-search
        @submit="goToContact()"
        @update:modelvalue="
          (data) => {
            searchText = data;
          }
        "
      />
    </div>
    <div class="mt-3 col-md-6">
      <h4>
        Danh bạ
        <i class="fas fa-address-book"></i>
      </h4>
      <contact-list
        v-if="fillteredContactsCount > 0"
        :contacts="fillteredContacts"
        v-model:activeIndex="activeIndex"
      />
      <p v-else>Không có liên hệ nào</p>
      <div
        class="mt-3 row justify-content-around align-items-center"
      >
        <button class="btn btn-sm btn-primary" @click="refreshList">
          <i class="fa-brands fa-vuejs"></i> Làm mới
        </button>

        <button class="btn btn-sm btn-success" @click="goToAddContact">
          <i class="fas fa-plus"></i> Thêm mới
        </button>

        <button class="btn btn-sm btn-danger" @click="removeAllContacts">
          <i class="fa-solid fa-trash-can"></i> Xóa tất cả
        </button>
      </div>
    </div>

    <div class="mt-3 col-md-6">
      <div v-if="activeContact">
        <h4>
          Chi tiết liên hệ
          <i class="fas fa-address-card"></i>
        </h4>
        <contact-card :contact="activeContact" />
        <router-link
          :to="{
            name: 'contact.edit',
            params: { id: activeContact._id },
          }"
        >
            <span class="mt-2 badge badge-warning">
                <i class="fas fa-edit"></i> Hiệu chỉnh
            </span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import ContactCard from "../components/ContactCard.vue";
import ContactList from "../components/ContactList.vue";
import InputSearch from "../components/InputSearch.vue";
import ContactService from "../services/contact.service.js";

export default {
  components: {
    ContactCard,
    ContactList,
    InputSearch,
  },
  data() {
    return {
      contacts: [],
      activeIndex: -1,
      searchText: "",
    };
  },
  watch: {
    searchText() {
      console.log(1);
      this.activeIndex = -1;
    },
  },
  computed: {
    contactStrings() {
      return this.contacts.map((contact) => {
        const { name, email, address, phone } = contact;
        return [name, email, address, phone].join("");
      });
    },
    fillteredContacts() {
      if (!this.searchText) return this.contacts;
      return this.contacts.filter((contact, index) => {
        this.contactStrings[index].includes(this.searchText);
      });
    },
    activeContact() {
      if (this.activeIndex < 0) return null;
      return this.fillteredContacts[this.activeIndex];
    },
    fillteredContactsCount() {
      return this.fillteredContacts.length;
    },
  },
  methods: {
    async retrieveContacts() {
      try {
        this.contacts = await ContactService.getAll();
      } catch (error) {
        console.log(error);
      }
    },

    refreshList() {
      this.retrieveContacts();
      this.activeIndex = -1;
    },

    async removeAllContacts() {
      if (confirm("Ban muon xoa tat ca lien he?")) {
        try {
          await ContactService.deleteAll();
          this.refreshList();
        } catch (error) {
          console.log(error);
        }
      }
    },

    goToAddContact() {
      this.$router.push({ name: "contact.add" });
    },
    mounted() {
      this.refreshList();
    },
  },
};
</script>
<style></style>
