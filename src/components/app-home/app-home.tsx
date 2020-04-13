import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title size="large" style={{"text-align": "center"}}>Nutriapp</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-tabs>
            <ion-tab tab="home">
                <ion-content>
                  <ion-list lines="none">
                    <ion-item>
                      <ion-card href="/recipe-detail/burrito">
                        <ion-img src="/assets/img/burrito-chicken-delicious-dinner-461198.jpg"></ion-img>
                        <ion-card-header>
                          <ion-card-title>Burrito</ion-card-title>
                        </ion-card-header>

                        <ion-card-content>
                          Keep close to Nature's heart... and break clear away, once in awhile,
                          and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </ion-card-content>
                      </ion-card>
                    </ion-item>
                    
                    <ion-item>
                      <ion-card>
                        <ion-img src="/assets/img/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg"></ion-img>
                        <ion-card-header>
                          <ion-card-title>Burrito</ion-card-title>
                        </ion-card-header>

                        <ion-card-content>
                          Keep close to Nature's heart... and break clear away, once in awhile,
                          and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </ion-card-content>
                      </ion-card>
                    </ion-item>

                    <ion-item>
                      <ion-card>
                        <ion-img src="/assets/img/top-view-photo-of-food-dessert-1099680.jpg"></ion-img>
                        <ion-card-header>
                          <ion-card-title>Burrito</ion-card-title>
                        </ion-card-header>

                        <ion-card-content>
                          Keep close to Nature's heart... and break clear away, once in awhile,
                          and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </ion-card-content>
                      </ion-card>
                    </ion-item>

                    <ion-item>
                      <ion-card>
                        <ion-img src="/assets/img/burrito-chicken-delicious-dinner-461198.jpg"></ion-img>
                        <ion-card-header>
                          <ion-card-title>Burrito</ion-card-title>
                        </ion-card-header>

                        <ion-card-content>
                          Keep close to Nature's heart... and break clear away, once in awhile,
                          and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </ion-card-content>
                      </ion-card>
                    </ion-item>

                    <ion-item>
                      <ion-card>
                        <ion-img src="/assets/img/burrito-chicken-delicious-dinner-461198.jpg"></ion-img>
                        <ion-card-header>
                          <ion-card-title>Burrito</ion-card-title>
                        </ion-card-header>

                        <ion-card-content>
                          Keep close to Nature's heart... and break clear away, once in awhile,
                          and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </ion-card-content>
                      </ion-card>
                    </ion-item>

                  </ion-list>
                  </ion-content>
              </ion-tab>
  
            <ion-tab tab="diet">
              <ion-header translucent>
                <ion-toolbar color="primary">
                  <ion-title>Home</ion-title>
                </ion-toolbar>
              </ion-header>
              <ion-content class="ion-padding">
                  <p>
                    Welcome to the PWA Toolkit. You can use this starter to build entire
                    apps with web components using Stencil and ionic/core! Check out the
                    README for everything that comes in this starter out of the box and
                    check out our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
                  </p>

                  <ion-button href="/profile/ionic" expand="block">Profile page</ion-button>

                  <ion-card>
                    <ion-card-header>
                      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                      <ion-card-title>Card Title</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                      Keep close to Nature's heart... and break clear away, once in awhile,
                      and climb a mountain or spend a week in the woods. Wash your spirit clean.
                    </ion-card-content>
                  </ion-card>
                </ion-content>
            </ion-tab>

            <ion-tab tab="buy-suply">
              <ion-nav></ion-nav>
            </ion-tab>

            <ion-tab tab="search-recipe">
              <ion-nav></ion-nav>
            </ion-tab>

            <ion-tab-bar slot="bottom">
              <ion-tab-button tab="home">
                <ion-icon name="home-outline"></ion-icon>
              </ion-tab-button>

              <ion-tab-button tab="diet">
                <ion-icon name="nutrition-outline"></ion-icon>
              </ion-tab-button>

              <ion-tab-button tab="buy-suply">
                <ion-icon name="cart-outline"></ion-icon>
              </ion-tab-button>

              <ion-tab-button tab="search-recipe">
                <ion-icon name="search-outline"></ion-icon>
              </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
      </ion-content>
    ];
  }
}
