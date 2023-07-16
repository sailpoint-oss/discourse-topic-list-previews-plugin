export default {
  setupComponent(attrs, component) {
    component.set('blogEnabled', settings.topic_list_blog);
  }
}
