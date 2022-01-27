<template>
  <Layout>
    
  </Layout>
</template>

<page-query>
{
  allWordPressPortfolioCategory {
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
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  metaInfo: {
    title: "Contact Us"
  },
  components: {
    
  },
  data() {
    return {
      form: {
        fname: "",
        fmail: "",
        fservice: null,
        fwebsite: "",
        fmessage: ""
      },
      submitStatus: null,
      pageTitle: "Contact"
    };
  },
  validations: {
    form: {
      fname: {
        required,
        minLength: minLength(2)
      },
      fmail: {
        required,
        email
      },
      fservice: {},
      fwebsite: {},
      fmessage: {
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
          fetch( 'https://cdn.rotsenacob.com/wp-json/contact-form-7/v1/contact-forms/3/feedback', {
            method: "POST",
            headers: { 
              "Content-Type": "application/x-www-form-urlencoded",
              "Accept": "application/json"
            },
            body: this.encode({
              "form-name": "contact",
              ...this.form
            })
          })
            .then(() => {
              this.submitStatus = "OK";
              this.$router.push("/thanks");
            })
            .catch(error => {
              this.submitStatus = "ERROR";
            });
        }, 500);
      }
    }
  }
};
</script>