# sudofox/sudo-haiku-locales

Translations for sudo::haiku

## Editing

- Editing should be done within the `messages/<LANGCODE>/LC_MESSAGES/<domain>.po` files.
- The source language will be in English.
- Please be observant for additional instructions for certain strings

## Usage with sudo-haiku-frontend

```js
import { messages } from '@/locales/messages';

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'ja', // set locale
    messages, // set locale messages
})
```

## Usage with sudo-haiku-api

Not implemented yet, but it will probably be similar to how I did it for Sudomemo.

## Utils

Generate the messages.js from the msgfmt .po files:

```sh
npm run compile
```

Clean and sort the msgfmt files:

```sh
npm run clean
```

Compile the msgfmt .po files into .mo files, for server-side usage:

```sh
npm run convert
```
