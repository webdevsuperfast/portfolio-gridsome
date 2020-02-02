<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main>
      <div class="w-100">
        <h2>Let's Talk</h2>
        <p
          class="lead mb-4"
        >Thanks for dropping by. Send me an information about your project so I can determine how can I help you.</p>
        <b-form
          @submit.prevent="handleSubmit"
          name="contact"
          class="text-center w-md-75 mx-auto"
          method="POST"
          action="https://formspree.io/xlegeved"
        >
          <b-form-input name="form-name" value="contact" hidden></b-form-input>

          <b-row>
            <b-col lg="6" class="form-group">
              <b-form-input
                v-model.trim="$v.form.name.$model"
                type="text"
                class="form-control"
                placeholder="Name"
                name="name"
                aria-describedby="name-live-feedback"
                :state="$v.form.name.$dirty ? !$v.form.name.$error : null"
              ></b-form-input>
              <b-form-invalid-feedback
                id="name-live-feedback"
              >Field is required and name must have at least {{ $v.form.name.$params.minLength.min }} characters.</b-form-invalid-feedback>
            </b-col>
            <b-col lg="6" class="form-group">
              <b-form-input
                v-model.trim="$v.form.email.$model"
                type="email"
                class="form-control"
                placeholder="Email Address"
                name="email"
                aria-describedby="email-live-feedback"
                :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
              ></b-form-input>
              <b-form-invalid-feedback
                id="email-live-feedback"
              >Field is required and email must be a valid email.</b-form-invalid-feedback>
            </b-col>
            <b-col lg="6" class="form-group">
              <b-form-select v-model.trim="$v.form.service.$model">
                <template v-slot:first>
                  <b-form-select-option :value="null">Service you're interested in?</b-form-select-option>
                </template>
                <b-form-select-option v-for="{ node } in $page.allPortfolioCategory.edges" :key="node.id" :value="node.slug">{{node.title}}</b-form-select-option>
              </b-form-select>
            </b-col>
            <b-col lg="6" class="form-group">
              <b-form-input
                v-model.trim="$v.form.website.$model"
                type="url"
                class="form-control"
                placeholder="Website"
                name="website"
                aria-describedby="website-live-feedback"
                :state="$v.form.website.$dirty ? !$v.form.website.$error : null"
              ></b-form-input>
            </b-col>
            <b-col lg="12" class="form-group">
              <b-form-input
                v-model.trim="$v.form.subject.$model"
                type="text"
                class="form-control"
                placeholder="Subject"
                name="subject"
                aria-describedby="subject-live-feedback"
                :state="$v.form.subject.$dirty ? !$v.form.subject.$error : null"
              ></b-form-input>
            </b-col>
            <b-col lg="12" class="form-group">
              <b-form-textarea
                v-model.trim="$v.form.message.$model"
                name="message"
                cols="80"
                rows="10"
                class="form-control form-control-lg"
                placeholder="Tell me more about your project"
                aria-describedby="message-live-feedback"
                :state="$v.form.message.$dirty ? !$v.form.message.$error : null"
              ></b-form-textarea>
              <b-form-invalid-feedback id="message-live-feedback">Field is required</b-form-invalid-feedback>
            </b-col>
            <b-col lg="12" class="text-left mb-4">
              <b-button
                type="submit"
                :disabled="submitStatus === 'PENDING'"
                variant="outline-primary"
              >Submit</b-button>
            </b-col>
            <b-col lg="12" class="text-center">
              <b-alert :show="submitStatus === 'OK'" variant="success">Thanks for your submission!</b-alert>
              <b-alert
                :show="submitStatus === 'ERROR'"
                variant="danger"
              >Please fill the form correctly.</b-alert>
              <b-alert :show="submitStatus === 'PENDING'" variant="info">Sending...</b-alert>
            </b-col>
          </b-row>
        </b-form>
      </div>
    </Main>
  </Layout>
</template>

<page-query>
{
  allPortfolioCategory(sortBy: "slug", order: ASC) {
    edges {
      node {
        id,
        title,
        slug
      }
    }
  }
}
</page-query>
<script>
import Main from "@/layouts/Main";

import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  metaInfo: {
    title: "Contact Us"
  },
  components: {
    Main
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        service: null,
        website: "",
        subject: "",
        message: ""
      },
      submitStatus: null,
      pageTitle: "Contact"
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2)
      },
      email: {
        required,
        email
      },
      service: {},
      website: {},
      subject: {},
      message: {
        required
      }
    }
  },
  methods: {
    encode: function(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit: function() {
      this.$v.form.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        setTimeout(() => {
          fetch("https://formspree.io/xlegeved", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({
              "form-name": "contact",
              ...this.form
            })
          })
            .then(() => {
              this.submitStatus = "OK";
            })
            .catch(error => {
              this.submitStatus = "ERROR";
            })
            .finally(() => {
              this.$router.push("/thanks");
            });
        }, 500);
      }
    }
  }
};
</script>