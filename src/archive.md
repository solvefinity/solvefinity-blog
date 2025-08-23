---
title: Blog
---

{% extends 'layouts/base.njk' %}

{% set introHeading = title %}
{% set introSummary %}A place to voice our useful opinions.{% endset %}

{% block content %}
  <main id="main-content" tabindex="-1">
    {% include "partials/components/intro.njk" %}
    {# OLD: {% include "partials/components/post-list.njk" %} #}
    {% include "partials/components/post-grid.njk" %}
  </main>
{% endblock %}
