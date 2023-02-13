# Strona WWW

Celem zadania jest stworzenie prostej strony, króra będzie się składała ze strony głównej, strony "O Mnie", blogu oraz strony wyświetlającej treść wpisu na blogu.
Jako podstawę aplikacji należy użyć `Create React App` wraz z `React Router`.

## Wymagana wiedza

- JavaScript, React


## Technologie potrzebne do zadania

- JavaScript, React, React-Router

## Cele główne
* [ ] Stwórz komponent strony głownej
* [ ] Stwórz komponent strony "O Mnie" pod adresem `/o-mnie`
* [ ] Stworz komponent strony "Blog" z listą wpisów pod adresem `/blog`
* [ ] Stworz komponent artykułu / wpisu na blogu pod adresem `/blog/{SLUG_POSTU}`

## Cele dodatkowe
* [ ] Brak

## Przydatne linki

- Create React App - https://create-react-app.dev
- React Router - https://reactrouter.com/docs/en/v6

## Dane wpisów / postów do zadania

```javascript
[
    {
        title: 'Lorem ipsum dolor',
        slug: 'lorem-ipsum-dolor',
        author: 'Adam Jakiś',
        date: '21.11.2021',
        entry: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor magna eget est lorem. Purus faucibus ornare suspendisse sed nisi.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor magna eget est lorem. Purus faucibus ornare suspendisse sed nisi. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Id cursus metus aliquam eleifend mi in nulla. Id aliquet risus feugiat in ante. In nibh mauris cursus mattis molestie a iaculis at erat. Sit amet porttitor eget dolor morbi non arcu risus quis. Consequat semper viverra nam libero justo laoreet sit. Vestibulum lectus mauris ultrices eros in. Bibendum ut tristique et egestas quis ipsum suspendisse. Egestas purus viverra accumsan in nisl nisi. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. At imperdiet dui accumsan sit amet nulla facilisi morbi.',
    },
    {
        title: 'Aliquam ultrices sagittis',
        slug: 'aliquam-ultrices-sagittis',
        author: 'Adam Jakiś',
        date: '21.11.2021',
        entry: 'Pharetra magna ac placerat vestibulum lectus mauris. Tempus urna et pharetra pharetra massa massa ultricies. Facilisis volutpat est velit egestas dui id ornare arcu odio.',
        content: 'Pharetra magna ac placerat vestibulum lectus mauris. Tempus urna et pharetra pharetra massa massa ultricies. Facilisis volutpat est velit egestas dui id ornare arcu odio. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. At augue eget arcu dictum varius duis at consectetur lorem. Euismod in pellentesque massa placerat. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Magna sit amet purus gravida. Morbi non arcu risus quis varius quam quisque id. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Duis at consectetur lorem donec massa sapien faucibus et. Facilisi cras fermentum odio eu feugiat pretium. Risus sed vulputate odio ut enim. Maecenas ultricies mi eget mauris pharetra et ultrices neque.',
    },
    {
        title: 'Tempor orci eu',
        slug: 'tempor-orci-eu',
        author: 'Adam Jakiś',
        date: '21.11.2021',
        entry: 'Turpis massa sed elementum tempus egestas. Leo urna molestie at elementum eu facilisis. Non sodales neque sodales ut. Congue nisi vitae suscipit tellus mauris a diam maecenas sed.',
        content: 'Turpis massa sed elementum tempus egestas. Leo urna molestie at elementum eu facilisis. Non sodales neque sodales ut. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Turpis in eu mi bibendum neque egestas congue quisque egestas. Integer enim neque volutpat ac tincidunt vitae semper. Tempor nec feugiat nisl pretium fusce. Facilisis gravida neque convallis a cras semper auctor neque vitae. Malesuada nunc vel risus commodo viverra maecenas accumsan. Risus feugiat in ante metus dictum. Consectetur purus ut faucibus pulvinar elementum integer. Quisque id diam vel quam elementum pulvinar etiam. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Nibh mauris cursus mattis molestie a iaculis at erat. Nisi scelerisque eu ultrices vitae auctor. Nunc mattis enim ut tellus elementum. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper.',
    },
]
```