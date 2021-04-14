<template>

    <normal-section
    :title="titles[0]"
    :subtitleA="subtitles[0]" 
    :textA="texts[0]"
    :subtitleB="subtitles[1]"
    :textB="texts[1]"
    :background="images[0]"
    :inverted="isInverted[0]"> 
    </normal-section>

    <alternate-section
    :title="titles[1]"
    :text="texts[2]"
    :image="images[1]"
    > 
    </alternate-section>

    <normal-section
    :title="titles[2]"
    :subtitleA="subtitles[2]" 
    :textA="texts[2]"
    :subtitleB="subtitles[3]"
    :textB="texts[3]"
    :background="images[2]"
    :inverted="isInverted[1]"> 
    </normal-section>


</template>

<script>

import NormalSection from './NormalSection.vue'
import AlternateSection from './AlternateSection.vue'


export default {
    components: {
        NormalSection,
        AlternateSection
    },
    data() {
        return {
            titles: ['Designed for the future', 'State of the Art Infrastructure', ' '],
            subtitles: ['Introducing an extensible editor', 'Robust content management', 'Free, open, simple', 'Powerful tooling'],
            texts: ['Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or  change the looks of a blog.', 'Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.', 'With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.', 'Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.', 'Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.'],
            images: ["illustration-editor-desktop.svg", "illustration-phones.svg", "illustration-laptop-desktop.svg"],
            isInverted: [false, true]
        }
    }
}

</script>

<style scoped>

</style>