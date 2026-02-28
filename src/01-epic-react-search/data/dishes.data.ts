export interface IDish {
  id: string;
  name: string;
  hook: string;
  dishDescription: string;
  drink: string;
  image: string;
}

export const dishesData: IDish[] = [
  {
    id: 'blueberry-mini-cake',
    name: 'Blueberry Mini Cake',
    hook: 'A tasty treat made with fresh blueberries.',
    dishDescription: 'A moist blueberry mini cake bursting with fresh blueberries, topped with a light sparkling glaze and beautiful edible flowers.',
    drink: 'Blueberry Rooibos. This caffeine-free tea has natural blueberry flavors that complement the dessert without overpowering it.',
    image: '/blueberry-mini-cake.png',
  },
  {
    id: 'poached-pears',
    name: 'Cardamom & Rose Water Poached Pears',
    hook: 'A sophisticated, aromatic dish that feels like a fantasy novel feast.',
    dishDescription: 'Bosc pears peeled and poached gently in water infused with crushed cardamom pods, a cinnamon stick, and a splash of rose water. The cooking liquid reduces down to a natural syrup concentrated with the pear\'s own fructose.',
    drink: 'White Peony (Bai Mu Dan). This delicate white tea has floral notes that weave perfectly with the rose and cardamom without overpowering the pear.',
    image: '/cardamom-pears.png',
  },
  {
    id: 'cherry-mini-cake',
    name: 'Cherry Mini Cake',
    hook: 'A sweet and tart treat perfect for cherry lovers.',
    dishDescription: 'A moist cherry mini cake made with fresh cherries, topped with a cherry glaze and garnished with whole cherries.',
    drink: 'Lemon Tea. The citrusy notes of lemon tea complement the tartness of the cherries, creating a balanced flavor profile.',
    image: '/cherry-mini-cake.png',
  },
  {
    id: 'avocado-mousse',
    name: 'Dark Chocolate Avocado Mousse with Sea Salt',
    hook: 'Rich, creamy, and completely decadent without being heavy.',
    dishDescription: 'Ripe avocados blended with high-quality unsweetened cocoa powder, a splash of almond milk, and soft Medjool dates (soaked for smoothness). Top with a pinch of flaky sea salt and crushed pistachios.',
    drink: 'Hojicha (Roasted Green Tea). The nutty, roasted, savory profile of Hojicha cuts through the richness of the mousse and complements the dark chocolate notes beautifully.',
    image: '/avocado-choco-mousse.png',
  },
  {
    id: 'orange-mini-cake',
    name: 'Orange Mini Cake',
    hook: 'A zesty and refreshing dessert bursting with citrus flavor.',
    dishDescription: 'A moist orange mini cake made with fresh orange zest and juice, topped with a tangy orange glaze and garnished with orange slices.',
    drink: 'Red Flower Tea. This fruity tea has natural citrus flavors that enhance the orange notes of the cake.',
    image: '/orange-mini-cake.png',
  },
  {
    id: 'warm-berry-walnut-crumble',
    name: 'Warm Berry & Walnut Crumble',
    hook: 'The ultimate "cozy" comfort food.',
    dishDescription: 'A base of mixed berries (raspberries, blueberries) stewed until they release their juices. The topping is a mix of rolled oats, crushed walnuts, cinnamon, and mashed ripe banana (instead of butter/sugar) baked until golden.',
    drink: 'Rooibos Vanilla. The natural sweetness and woody notes of Rooibos enhance the berry tartness, while the vanilla scent mimics a scoop of ice cream on the side.',
    image: '/berry-walnut-crumble.png',
  },
  {
    id: 'chocolate-croissant',
    name: 'Chocolate Croissant',
    hook: 'A flaky, buttery pastry filled with rich chocolate.',
    dishDescription: 'A classic croissant made with layers of buttery, flaky pastry dough, filled with high-quality dark chocolate and baked to golden perfection.',
    drink: 'Lemon Tea. The citrusy notes of lemon tea provide a refreshing contrast to the rich chocolate flavor of the croissant.',
    image: '/choco-croissant.png',
  },
  {
    id: 'orange-mini-cake-with-blue-tea',
    name: 'Orange Mini Cake with Blue Tea',
    hook: 'A citrusy delight paired with a visually stunning tea.',
    dishDescription: 'A zesty orange mini cake made with fresh orange zest and juice, topped with a tangy orange glaze and garnished with orange slices.',
    drink: 'Blue Pea Flower Tea. This vibrant blue tea has a mild, earthy flavor that pairs well with the citrus notes of the cake while providing a beautiful color contrast.',
    image: '/orange-mini-cake-with-blue-tea.png',
  },
  {
    id: 'tahini-fig-cream',
    name: 'Tahini & Fig "Nice" Cream',
    hook: 'A savory-sweet frozen treat for the experimental palate.',
    dishDescription: 'Frozen sliced bananas blended until they reach soft-serve consistency. Swirl in pure tahini (sesame paste) and fold in chopped dried figs. The earthiness of the tahini balances the high sweetness of the banana.',
    drink: 'Genmaicha (Brown Rice Tea). The toasted rice flavor in this green tea pairs exceptionally well with the sesame/tahini flavor profile.',
    image: '/tahini-fig-cream.png',
  }
];