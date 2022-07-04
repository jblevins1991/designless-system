# Designless System

Designless system was built to quickly build web pages that are screen-reader friendly and force implementation of aria authoring best practices when necessary. This includes only using aria when needed, compliance with `name role value` conventions where needed, and sticking to natural HTML attributes for all components.

Designless System comes without any styles. This decision was made so I could use all of the components on any of my projects without compromising CSS specificity simplicity. CSS can get really hairy when you have to come up with creative ways to override styles, causing maintenance complexity to suffer. This also provides developers the freedom to pair any styling library or method to fit their needs.