export enum AppRoute {
  Main = '/',
  SignIn = 'login',
  MyList = 'mylist',
  Film = 'films/:id',
  AddReview = 'review',
  Player = 'player/:id',
  NotFoundError = '*'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum ReducerName {
  App = 'App',
  Film = 'Film',
  User = 'User',
}
