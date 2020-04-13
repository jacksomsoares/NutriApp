import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'recipe-detail',
    styleUrl: 'recipe-detail.css'
})
export class RecipeDetail {

    @Prop() name: string;

    render() {
        return [
            <ion-header>
                <ion-toolbar color="light">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/" />
                    </ion-buttons>
                    <ion-title>{this.name}</ion-title>
                </ion-toolbar>
            </ion-header>,
            <ion-content>
                <ion-img src="/assets/img/burrito-chicken-delicious-dinner-461198.jpg"></ion-img>
                <h2>INGREDIENTES</h2>
                <ion-list lines="none">
                    <ion-list-header>Massa tortilla</ion-list-header>
                    <ion-item>
                        <ion-label>2 xícaras (chá) de farinha de trigo (220 g)</ion-label>
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                    </ion-item>
                    <ion-item>
                        <ion-label>1 colher (sopa) de manteiga</ion-label>
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                    </ion-item>
                    <ion-item>
                        <ion-label>1 colher (chá) de fermento em pó</ion-label>
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                    </ion-item>
                    <ion-item>
                        <ion-label>meia colher (chá) de sal</ion-label>
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                    </ion-item>
                    <ion-item>
                        <ion-label>1 xícara (chá) de água fervente (200 ml)</ion-label>
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                    </ion-item>
                </ion-list>

                <ion-list lines="none">
                    <ion-list-header>Creme azedo</ion-list-header>
                    <ion-item>
                        <ion-label>1 xícara (chá) de creme de leite fresco (200 ml)</ion-label>
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                    </ion-item>
                    <ion-item>
                        <ion-label>1 copo de iogurte natural (200 g)</ion-label>
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                    </ion-item>
                    <ion-item>
                        <ion-label>2 colheres (sopa) de suco de limão</ion-label>
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                    </ion-item>
                    <ion-item>
                        <ion-label>1 pitada de sal</ion-label>
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                    </ion-item>
                </ion-list>

                <ion-list lines="none">
                    <ion-list-header>Recheio</ion-list-header>
                    <ion-item>
                        <ion-label>1 xícara (chá) de feijão preto cozido (200 g)</ion-label>
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                    </ion-item>
                    <ion-item>
                        <ion-label>1 sachê de Tempero SAZÓN® Marrom</ion-label>
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                    </ion-item>
                    <ion-item>
                        <ion-label>1 pitada de sal</ion-label>
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                    </ion-item>
                    <ion-item>
                        <ion-label>meia xícara (chá) de milho-verde, escorrido (60 g)</ion-label>
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                    </ion-item>
                    <ion-item>
                        <ion-label>meio tomate médio, sem semente, picado (75 g)</ion-label>
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                    </ion-item>
                    <ion-item>
                        <ion-label>meia cebola roxa média cortada em fatias finas (75 g)</ion-label>
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                    </ion-item>
                </ion-list>

                <ion-list lines="none">
                    <ion-list-header>Montagem</ion-list-header>
                    <ion-item>
                        <ion-label>1 abacate tipo avocado, em 18 fatias finas (85 g)</ion-label>
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                    </ion-item>
                    <ion-item>
                        <ion-label>6 colheres (sopa) de queijo muçarela ralado (45 g)</ion-label>
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                    </ion-item>
                </ion-list>

                <h2>MODO DE PREPARO</h2>

                <ion-list lines="none">
                    <ion-item>
                        <ion-label>1. Prepare a massa: em um tigela média, coloque a farinha, a manteiga, o fermento e o sal, e misture. Junte a água fervente aos poucos, mexendo sempre. Transfira para uma superfície lisa e enfarinhada, e sove a massa, com as mãos, por 15 minutos, ou até que ela fique macia. Cubra com filme plástico e deixe descansar por 10 minutos.</ion-label>
                        <ion-checkbox color="secondary" slot="start"></ion-checkbox>
                    </ion-item>
                    <ion-item>
                        <ion-label>2. Na mesma superfície lisa e enfarinhada, divida a massa em 6 pedaços iguais. Com o auxílio de um rolo de macarrão, abra a massa em círculos de 25 cm de diâmetro, ou até ficar fina e quase transparente. Em uma frigideira média, aqueça 1 fio de óleo, em fogo alto, e frite os discos de massa, por 3 minutos, virando na metade do tempo, ou até que fiquem levemente dourada nos dois lados.</ion-label>
                        <ion-checkbox color="secondary" slot="start"></ion-checkbox>
                    </ion-item>

                    <ion-item>
                        <ion-label>3. Prepare o creme azedo: em uma tigela média, coloque o creme de leite, o iogurte, o limão e o sal, e bata, com o auxílio de um batedor de arame, por 2 minutos, ou até ficar homogêneo. Cubra com filme plástico e leve à geladeira até o momento da montagem.</ion-label>
                        <ion-checkbox color="secondary" slot="start"></ion-checkbox>
                    </ion-item>
                    <ion-item>
                        <ion-label>4. Prepare o recheio: em uma tigela média, coloque o feijão, o Tempero SAZÓN®, o sal, o milho-verde, o tomate e a cebola, e misture bem. Reserve.</ion-label>
                        <ion-checkbox color="secondary" slot="start"></ion-checkbox>
                    </ion-item>
                    <ion-item>
                        <ion-label>5. Montagem: sobre cada disco de massa, distribua 1 colher (sopa) do creme azedo, acrescente 3 colheres de (sopa) do recheio reservado, 3 fatias do avocado e polvilhe com 1 colher (sopa) do queijo muçarela. Dobre as laterais e enrole como um burrito, deixando a abertura para baixo.</ion-label>
                        <ion-checkbox color="secondary" slot="start"></ion-checkbox>
                    </ion-item>
                    <ion-item>
                        <ion-label>6. Repita o processo com os ingredientes restantes. Sirva em seguida acompanhado do creme azedo restante.</ion-label>
                        <ion-checkbox color="secondary" slot="start"></ion-checkbox>
                    </ion-item>
                </ion-list>

                <h2>Dica</h2>
                <p>
                    1. Se desejar um creme azedo mais espesso bata o creme na batedeira por 3 minutos ou até chegar na consistência desejada. <br/>
                    2. Caso prefira, substitua a massa por massa pronta para wrap ou tortilla.
                </p>
            </ion-content>
            
        ];
    }
}