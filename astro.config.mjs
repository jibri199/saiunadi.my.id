import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Adi Docs',
    social: {
      github: 'https://github.com/jibri199/saiunadi.my.id'
    },
    sidebar: [{
      label: 'Doc',
      items: [{
        label: 'Intro',
        link: '/start/intro/'
      }, {
        label: 'Localhost',
        link: '/start/localhost/'
      }, {
        label: 'Hosting',
        link: '/start/hosting/'
      }]
    }, {
      label: 'Network',
      items: [{
        label: 'Definisi',
        link: '/network/definisi/'
      }, {
        label: 'LAN',
        link: '/network/lan/'
      }, {
        label: 'WAN',
        link: '/network/wan/'
      }, {
        label: 'MikroTik',
        link: '/network/mikrotik/'
      }, {
        label: 'Firewall',
        link: '/network/firewall/'
      }, {
        label: 'VPN',
        link: '/network/vpn/'
      }, {
        label: 'Tunnel',
        link: '/network/tunnel/'
      }, {
        label: 'Monitoring',
        link: '/network/monitoring/'
      }, {
        label: 'Maintanance',
        link: '/network/maintanance/'
      }]
    }, {
      label: 'Linux',
      items: [{
        label: 'Prolog',
        link: '/linux/prolog/'
      }, {
        label: 'CLI Linux',
        link: '/linux/cli/'
      }, {
        label: 'SSH Remote',
        link: '/linux/remote/'
      }, {
        label: 'Timezone',
        link: '/linux/timezone/'
      }, {
        label: 'Monitor',
        link: '/linux/monitor/'
      }, {
        label: 'Hardening',
        link: '/linux/hardening/'
      }]
    }, {
      label: 'Server',
      items: [{ label: 'Prolog', link: '/server/prolog/' },
      {
        label: 'engine',
        items: [
          { label: 'Mariadb', link: '/server/engine/mariadb/' },
          { label: 'Nginx', link: '/server/engine/nginx/' },
          { label: 'PHP', link: '/server/engine/php/' },
          { label: 'Composer', link: '/server/engine/composer/' },

        ]

      }]
    }]
  }), sitemap()],
  site: "https://saiunadi.my.id",
  output: "static",
  adapter: node({
    mode: "standalone"
  })
});