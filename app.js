// ===================== DATA =====================

const CHEESES = [
  // ── ORIGINALS ──────────────────────────────────────────────────────────────
  { id:1,  name:"Parmigiano-Reggiano",    origin:"Emilia-Romagna, Italy",    type:"aged",  price:28.99, unit:"lb", emoji:"🧀", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Parmigiano_reggiano.jpg/400px-Parmigiano_reggiano.jpg",                                                    rating:4.9, reviews:342, badge:null,  desc:"The king of Italian cheeses. Aged 24+ months with a granular texture and rich, nutty, umami-forward flavour. Perfect for grating or eating in chunks with honey.", tags:["Cow's Milk","Hard","Aged 24mo","Imported"] },
  { id:2,  name:"French Brie de Meaux",  origin:"Île-de-France, France",    type:"soft",  price:19.99, unit:"lb", emoji:"🍥", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Brie_de_Meaux_Rouzaire.jpg/400px-Brie_de_Meaux_Rouzaire.jpg",                                              rating:4.8, reviews:218, badge:"New", desc:"Protected designation Brie with a bloomy white rind and buttery, mushroomy interior. Best served at room temperature with a crusty baguette.", tags:["Cow's Milk","Soft","Bloomy Rind","Imported"] },
  { id:3,  name:"Aged Vermont Cheddar",  origin:"Vermont, USA",             type:"aged",  price:16.50, unit:"lb", emoji:"🟡", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Cheddar_Cheese_%28local%29.jpg/400px-Cheddar_Cheese_%28local%29.jpg",                                      rating:4.7, reviews:501, badge:null,  desc:"Sharp, bold and complex — aged 2 years on the farm. Crunchy tyrosine crystals throughout. A true American classic that stands up to any imported rival.", tags:["Cow's Milk","Hard","Aged 2yr","USA"] },
  { id:4,  name:"Roquefort AOP",         origin:"Aveyron, France",          type:"blue",  price:32.00, unit:"lb", emoji:"💙", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/RoquefortFR.jpg/400px-RoquefortFR.jpg",                                                                     rating:4.6, reviews:187, badge:null,  desc:"Cave-aged sheep's milk blue cheese from the Combalou caves. Intensely pungent, creamy and salty. Exceptional crumbled over salads or with a glass of Sauternes.", tags:["Sheep's Milk","Blue","AOP","Cave-Aged"] },
  { id:5,  name:"Manchego DOP",          origin:"La Mancha, Spain",         type:"hard",  price:21.00, unit:"lb", emoji:"⬜", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Queso_Manchego.jpg/400px-Queso_Manchego.jpg",                                                               rating:4.8, reviews:276, badge:null,  desc:"Spain's most iconic cheese — La Mancha sheep milk aged 6 months. Buttery with notes of hay and lanolin. The herringbone rind is a trademark.", tags:["Sheep's Milk","Hard","Aged 6mo","Spain"] },
  { id:6,  name:"Burrata Fresca",        origin:"Puglia, Italy",            type:"fresh", price:12.99, unit:"ea", emoji:"⚪", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Fresh_burrata_cheese.jpg/400px-Fresh_burrata_cheese.jpg",                                                    rating:4.9, reviews:412, badge:"New", desc:"Hand-crafted same-day burrata — a mozzarella shell filled with stracciatella and fresh cream. Eat within 24 hours for the full experience.", tags:["Cow's Milk","Fresh","Same-Day","Imported"] },
  { id:7,  name:"Époisses de Bourgogne", origin:"Burgundy, France",         type:"soft",  price:24.99, unit:"ea", emoji:"🟠", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Epoisses_2.jpg/400px-Epoisses_2.jpg",                                                                       rating:4.5, reviews:134, badge:null,  desc:"Napoleon's favourite cheese — a washed-rind powerhouse with an orange sticky rind, washed with Marc de Bourgogne. Pungent outside, silky inside.", tags:["Cow's Milk","Soft","Washed Rind","AOP"] },
  { id:8,  name:"Stilton PDO",           origin:"Nottinghamshire, UK",      type:"blue",  price:26.00, unit:"lb", emoji:"🔵", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Stilton_2.jpg/400px-Stilton_2.jpg",                                                                         rating:4.6, reviews:209, badge:null,  desc:"The 'King of English Cheeses' — rich, creamy and crumbly with distinctive blue-green veins. Traditionally served with port wine during the festive season.", tags:["Cow's Milk","Blue","PDO","UK"] },
  { id:9,  name:"Gouda 5-Year Aged",     origin:"Noord-Holland, Netherlands",type:"aged", price:34.00, unit:"lb", emoji:"🧡", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Goudacheese.jpg/400px-Goudacheese.jpg",                                                                     rating:4.9, reviews:388, badge:null,  desc:"Extra-aged Gouda with deep amber colour and caramel-butterscotch sweetness. Packed with crunchy crystals. A dessert cheese experience in every bite.", tags:["Cow's Milk","Hard","Aged 5yr","Netherlands"] },
  { id:10, name:"Chèvre Log",            origin:"Loire Valley, France",     type:"fresh", price:10.99, unit:"ea", emoji:"🐐", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/FrenchGoatCheese.jpg/400px-FrenchGoatCheese.jpg",                                                            rating:4.7, reviews:165, badge:"New", desc:"Fresh Loire Valley goat cheese — bright, tangy and lemon-zesty. Wonderful crumbled on salads, spread on toast, or drizzled with wildflower honey.", tags:["Goat's Milk","Fresh","Loire","France"] },
  { id:11, name:"Comté Reserve",         origin:"Franche-Comté, France",    type:"hard",  price:29.50, unit:"lb", emoji:"🟤", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Comte_Cheese.jpg/400px-Comte_Cheese.jpg",                                                                   rating:4.8, reviews:298, badge:null,  desc:"18-month aged Comté from a mountain fromagerie. Complex and fruity with notes of toasted hazelnuts and mountain herbs. One of France's great cheeses.", tags:["Cow's Milk","Hard","Mountain","AOP"] },
  { id:12, name:"Gorgonzola Piccante",   origin:"Lombardy, Italy",          type:"blue",  price:22.00, unit:"lb", emoji:"🫐", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gorgonzola_--_Di_Giovanna_--_cut.jpg/400px-Gorgonzola_--_Di_Giovanna_--_cut.jpg",                          rating:4.5, reviews:172, badge:null,  desc:"Intensely spicy and crumbly aged Gorgonzola. Great for pasta sauces, risotto or paired with pears and walnuts.", tags:["Cow's Milk","Blue","Aged","DOP"] },
  // ── 50 NEW CHEESES ─────────────────────────────────────────────────────────
  { id:13, name:"Gruyère AOP",           origin:"Fribourg, Switzerland",    type:"hard",  price:27.50, unit:"lb", emoji:"🟨", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Gruy%C3%A8re.jpg/400px-Gruy%C3%A8re.jpg",                                                                   rating:4.8, reviews:267, badge:null,  desc:"Switzerland's most celebrated cheese — aged 5–12 months in mountain caves. Fruity and slightly sweet with a firm paste. Essential for Swiss fondue.", tags:["Cow's Milk","Hard","Mountain","AOP"] },
  { id:14, name:"Emmental Grand Cru",    origin:"Bern Canton, Switzerland", type:"hard",  price:22.00, unit:"lb", emoji:"🕳️", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Emmental_Cheese.jpg/400px-Emmental_Cheese.jpg",                                                             rating:4.6, reviews:198, badge:null,  desc:"The original Swiss cheese with iconic large holes. Mild, sweet and slightly nutty. Made in enormous wheels in traditional alpine dairies.", tags:["Cow's Milk","Hard","Swiss","Grand Cru"] },
  { id:15, name:"Camembert de Normandie",origin:"Normandy, France",         type:"soft",  price:17.99, unit:"ea", emoji:"🟫", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Camembert_de_Normandie.jpg/400px-Camembert_de_Normandie.jpg",                                               rating:4.7, reviews:312, badge:null,  desc:"Authentic Norman Camembert from raw milk — worlds apart from industrial versions. Mushroomy, gooey and supremely aromatic at room temperature.", tags:["Cow's Milk","Soft","Raw Milk","AOP"] },
  { id:16, name:"Feta PDO",             origin:"Thessaly, Greece",          type:"fresh", price:14.50, unit:"lb", emoji:"🏛️", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Feta_Cheese.jpg/400px-Feta_Cheese.jpg",                                                                    rating:4.7, reviews:445, badge:null,  desc:"Authentic Greek feta brined in sheep and goat milk. Tangy, crumbly and salty. Protected by European law — if it's not from Greece, it's not Feta.", tags:["Sheep's Milk","Fresh","Brined","PDO"] },
  { id:17, name:"Halloumi DOP",         origin:"Nicosia, Cyprus",           type:"fresh", price:13.99, unit:"lb", emoji:"🔥", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Halloumi_cheese.jpg/400px-Halloumi_cheese.jpg",                                                             rating:4.8, reviews:388, badge:"New", desc:"The legendary grilling cheese of Cyprus. High melting point means it sears beautifully. Squeaky, salty and perfect on the BBQ or pan-fried.", tags:["Sheep's Milk","Fresh","Grilling","DOP"] },
  { id:18, name:"Pecorino Romano DOP",  origin:"Lazio, Italy",              type:"hard",  price:19.99, unit:"lb", emoji:"🐑", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Pecorino_romano.jpg/400px-Pecorino_romano.jpg",                                                             rating:4.7, reviews:231, badge:null,  desc:"Ancient Roman sheep's milk cheese with a sharp, salty bite. Aged 8+ months. The classic partner to Cacio e Pepe and Spaghetti alla Carbonara.", tags:["Sheep's Milk","Hard","Aged","DOP"] },
  { id:19, name:"Taleggio DOP",         origin:"Lombardy, Italy",           type:"soft",  price:21.99, unit:"lb", emoji:"🟧", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Taleggio_cheese.jpg/400px-Taleggio_cheese.jpg",                                                             rating:4.6, reviews:156, badge:null,  desc:"Washed-rind square cheese from the Val Taleggio caves. Pungent rind but surprisingly mild creamy interior. Excellent melted over polenta.", tags:["Cow's Milk","Soft","Washed Rind","DOP"] },
  { id:20, name:"Mozzarella di Bufala", origin:"Campania, Italy",           type:"fresh", price:16.99, unit:"ea", emoji:"💧", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Mozzarella_di_bufala_caserta.jpg/400px-Mozzarella_di_bufala_caserta.jpg",                                    rating:4.9, reviews:521, badge:"New", desc:"Real buffalo mozzarella from Campania — far richer than cow's milk versions. Milky, elastic and best eaten the day of purchase.", tags:["Buffalo Milk","Fresh","DOP","Italy"] },
  { id:21, name:"Reblochon de Savoie",  origin:"Haute-Savoie, France",     type:"soft",  price:23.99, unit:"ea", emoji:"🍂", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Reblochon_du_grand_Bornand.jpg/400px-Reblochon_du_grand_Bornand.jpg",                                       rating:4.7, reviews:143, badge:null,  desc:"The essential cheese of Tartiflette. Soft washed-rind from the Savoie Alps — nutty, creamy and slightly funky. Made from the richest second milking of the day.", tags:["Cow's Milk","Soft","Alpine","AOP"] },
  { id:22, name:"Appenzeller",          origin:"Appenzell, Switzerland",    type:"hard",  price:24.50, unit:"lb", emoji:"🌿", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Appenzeller_cheese.jpg/400px-Appenzeller_cheese.jpg",                                                       rating:4.6, reviews:178, badge:null,  desc:"Switzerland's most strongly flavoured cheese — rubbed with a secret herbal brine during aging. Spicy, aromatic and complex. The recipe is a 700-year-old secret.", tags:["Cow's Milk","Hard","Swiss","Herbal Brine"] },
  { id:23, name:"Raclette du Valais",   origin:"Valais, Switzerland",       type:"soft",  price:26.00, unit:"lb", emoji:"🫕", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Raclette.jpg/400px-Raclette.jpg",                                                                           rating:4.8, reviews:334, badge:null,  desc:"The king of melting cheeses — scraped hot over potatoes, cornichons and charcuterie. Rich, mild and buttery with a beautiful creamy melt.", tags:["Cow's Milk","Soft","Melting","Switzerland"] },
  { id:24, name:"Mimolette Vieille",    origin:"Lille, France",             type:"aged",  price:31.00, unit:"lb", emoji:"🟠", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Mimolette_-_Vieille.jpg/400px-Mimolette_-_Vieille.jpg",                                                    rating:4.7, reviews:122, badge:null,  desc:"France's most visually striking cheese — its cratered orange rind is created by cheese mites. Dense, butterscotch-sweet paste aged 6–24 months.", tags:["Cow's Milk","Hard","Aged","France"] },
  { id:25, name:"Red Leicester",        origin:"Leicestershire, UK",        type:"hard",  price:15.99, unit:"lb", emoji:"🟥", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/RedLeicester.jpg/400px-RedLeicester.jpg",                                                                   rating:4.5, reviews:189, badge:null,  desc:"England's gorgeous rusty-orange cheese coloured with annatto. Firm, crumbly and nutty with a slightly sweet, mellow flavour. Brilliant in ploughman's lunches.", tags:["Cow's Milk","Hard","UK","Annatto"] },
  { id:26, name:"Wensleydale",          origin:"Yorkshire, UK",             type:"fresh", price:16.99, unit:"lb", emoji:"🤍", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Wensleydale_cheese_closeup.jpg/400px-Wensleydale_cheese_closeup.jpg",                                       rating:4.6, reviews:211, badge:null,  desc:"Wallace & Gromit's favourite! Moist, crumbly and slightly honeyed — traditionally paired with fruit cake. Made in the Yorkshire Dales since the 12th century.", tags:["Cow's Milk","Fresh","UK","Yorkshire"] },
  { id:27, name:"Havarti",              origin:"Jutland, Denmark",          type:"soft",  price:13.50, unit:"lb", emoji:"🧈", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Havarti_cheese.jpg/400px-Havarti_cheese.jpg",                                                               rating:4.5, reviews:267, badge:null,  desc:"Denmark's beloved semi-soft cheese with a supple creamy texture and small irregular holes. Buttery and mild — great for sandwiches and melting.", tags:["Cow's Milk","Soft","Denmark","Mild"] },
  { id:28, name:"Jarlsberg",            origin:"Telemark, Norway",          type:"hard",  price:14.99, unit:"lb", emoji:"🕳",  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Jarlsberg.jpg/400px-Jarlsberg.jpg",                                                                        rating:4.5, reviews:298, badge:null,  desc:"Norway's famous holey cheese — inspired by Emmental but with its own sweet, mild personality. Great for slicing, sandwiches and fondue.", tags:["Cow's Milk","Hard","Norway","Mild"] },
  { id:29, name:"Edam",                 origin:"North Holland, Netherlands",type:"hard",  price:12.99, unit:"lb", emoji:"🔴", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Edammer.jpg/400px-Edammer.jpg",                                                                             rating:4.4, reviews:334, badge:null,  desc:"Holland's classic red-waxed export cheese — firm, mild and slightly salty. The iconic cannonball of the cheese world. Great for everyday snacking.", tags:["Cow's Milk","Hard","Netherlands","Mild"] },
  { id:30, name:"Fontina Val d'Aosta",  origin:"Aosta Valley, Italy",       type:"soft",  price:25.99, unit:"lb", emoji:"🏔️", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Fontina_-_2.jpg/400px-Fontina_-_2.jpg",                                                                    rating:4.7, reviews:145, badge:null,  desc:"True Italian Fontina — semi-soft, buttery and slightly earthy with a thin washed rind. The only authentic base for Italian fonduta.", tags:["Cow's Milk","Soft","Alpine","DOP"] },
  { id:31, name:"Provolone Valpadana",  origin:"Po Valley, Italy",          type:"hard",  price:18.50, unit:"lb", emoji:"🍐", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Provolone.jpg/400px-Provolone.jpg",                                                                         rating:4.5, reviews:167, badge:null,  desc:"Stretched-curd Italian cheese hung to age in pear shapes. Dolce is mild and buttery; Piccante (aged 3+ months) has a sharp, assertive bite.", tags:["Cow's Milk","Hard","Stretched Curd","DOP"] },
  { id:32, name:"Idiazabal DOP",        origin:"Basque Country, Spain",     type:"hard",  price:23.99, unit:"lb", emoji:"💨", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Idiazabal_cheese.jpg/400px-Idiazabal_cheese.jpg",                                                           rating:4.6, reviews:98,  badge:null,  desc:"Smoked Basque sheep's milk cheese with a distinctive campfire aroma. Dense, slightly oily paste with a long herbal finish. The taste of the Pyrenees.", tags:["Sheep's Milk","Hard","Smoked","DOP"] },
  { id:33, name:"Ossau-Iraty AOP",      origin:"Pyrénées-Atlantiques, FR",  type:"hard",  price:27.00, unit:"lb", emoji:"🐑", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Ossau-Iraty_cheese.jpg/400px-Ossau-Iraty_cheese.jpg",                                                       rating:4.7, reviews:112, badge:null,  desc:"Basque sheep's milk masterpiece aged in mountain huts. Rich, buttery and sweet with hints of roasted hazelnuts. Outstanding with black cherry jam.", tags:["Sheep's Milk","Hard","Pyrenees","AOP"] },
  { id:34, name:"Beaufort d'Alpage",    origin:"Savoie, France",            type:"hard",  price:33.00, unit:"lb", emoji:"⛰️", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/BeaufortCheese.jpg/400px-BeaufortCheese.jpg",                                                              rating:4.8, reviews:134, badge:null,  desc:"The 'Prince of Gruyères' — made only in summer from mountain pasture milk. Deeply complex with fruit, flowers and the essence of alpine meadows.", tags:["Cow's Milk","Hard","Alpine","AOP"] },
  { id:35, name:"Fourme d'Ambert AOP",  origin:"Auvergne, France",          type:"blue",  price:24.00, unit:"lb", emoji:"💜", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Fourme_d%27Ambert.jpg/400px-Fourme_d%27Ambert.jpg",                                                        rating:4.6, reviews:143, badge:null,  desc:"One of France's oldest cheeses — milder and creamier than Roquefort. Cylindrical blue with a gentle, mushroomy flavour. Perfect for blue cheese newcomers.", tags:["Cow's Milk","Blue","Mild","AOP"] },
  { id:36, name:"Bleu d'Auvergne AOP",  origin:"Auvergne, France",          type:"blue",  price:22.50, unit:"lb", emoji:"🩵", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Bleu_d%27Auvergne.jpg/400px-Bleu_d%27Auvergne.jpg",                                                        rating:4.5, reviews:121, badge:null,  desc:"Created as a French rival to Roquefort. Strong, spicy blue character from cow's milk. Moister and more spreadable than English blues.", tags:["Cow's Milk","Blue","France","AOP"] },
  { id:37, name:"Cambozola",            origin:"Bavaria, Germany",           type:"blue",  price:19.99, unit:"lb", emoji:"🫐", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Cambozola.jpg/400px-Cambozola.jpg",                                                                        rating:4.6, reviews:256, badge:null,  desc:"The perfect gateway blue — a triple-cream Camembert crossed with Gorgonzola. Buttery, mild and gently blue-veined. Approachable for all palates.", tags:["Cow's Milk","Blue","Soft","Germany"] },
  { id:38, name:"Cabrales PDO",         origin:"Asturias, Spain",           type:"blue",  price:35.00, unit:"lb", emoji:"🏔️", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Cabrales_cheese.jpg/400px-Cabrales_cheese.jpg",                                                           rating:4.5, reviews:87,  badge:null,  desc:"Spain's wildest cheese — cave-aged in the Picos de Europa, wrapped in maple leaves. Intensely pungent and complex. Not for the faint-hearted.", tags:["Blended Milk","Blue","Cave-Aged","PDO"] },
  { id:39, name:"Danish Blue",          origin:"Jutland, Denmark",          type:"blue",  price:16.99, unit:"lb", emoji:"🧊", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Danish_blue_cheese.jpg/400px-Danish_blue_cheese.jpg",                                                      rating:4.3, reviews:178, badge:null,  desc:"Created in 1927 as a Danish rival to Roquefort. Semi-soft, creamy and sharp with pronounced blue veins. Excellent crumbled on salads.", tags:["Cow's Milk","Blue","Denmark","Mild Blue"] },
  { id:40, name:"Cashel Blue",          origin:"Tipperary, Ireland",        type:"blue",  price:26.00, unit:"lb", emoji:"🍀", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Cashel_Blue_Cheese.jpg/400px-Cashel_Blue_Cheese.jpg",                                                      rating:4.7, reviews:119, badge:null,  desc:"Ireland's favourite blue — creamy, mellow and buttery from Beechmount Farm. Less aggressive than continental blues. Beautiful melted over steak.", tags:["Cow's Milk","Blue","Ireland","Farmhouse"] },
  { id:41, name:"Gorgonzola Dolce",     origin:"Lombardy, Italy",           type:"blue",  price:21.50, unit:"lb", emoji:"🩷", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Gorgonzola_Dolce.jpg/400px-Gorgonzola_Dolce.jpg",                                                          rating:4.7, reviews:198, badge:"New", desc:"The sweet, young cousin of Gorgonzola Piccante. Lusciously creamy, spreadable and gently blue-veined. Spoon it over pears, honey or sweet biscuits.", tags:["Cow's Milk","Blue","Soft","DOP"] },
  { id:42, name:"Asiago d'Allevo DOP",  origin:"Veneto, Italy",             type:"hard",  price:20.50, unit:"lb", emoji:"🏛️", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Asiago_pressato.jpg/400px-Asiago_pressato.jpg",                                                            rating:4.5, reviews:145, badge:null,  desc:"Aged mountain cheese from the Asiago plateau — nutty, crumbly and complex. Younger versions are milder and semi-soft. A versatile Italian classic.", tags:["Cow's Milk","Hard","Mountain","DOP"] },
  { id:43, name:"Piave Vecchio DOP",    origin:"Belluno, Italy",            type:"hard",  price:26.99, unit:"lb", emoji:"🏔️", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Piave_cheese.jpg/400px-Piave_cheese.jpg",                                                                  rating:4.8, reviews:134, badge:null,  desc:"Dolomite mountain cheese aged over 12 months. Granular, caramel-sweet paste reminiscent of fine aged Gouda. Exceptional with honey and balsamic.", tags:["Cow's Milk","Hard","Alpine","DOP"] },
  { id:44, name:"Tête de Moine AOP",    origin:"Bernese Jura, Switzerland", type:"hard",  price:29.50, unit:"ea", emoji:"🌸", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Tete_de_moine.jpg/400px-Tete_de_moine.jpg",                                                               rating:4.8, reviews:167, badge:null,  desc:"Shaved into delicate rosettes with a girolle tool. Intensely aromatic and peppery-sweet. Eating it is as much theatre as flavour.", tags:["Cow's Milk","Hard","Swiss","AOP"] },
  { id:45, name:"Double Gloucester",    origin:"Gloucestershire, UK",       type:"hard",  price:16.50, unit:"lb", emoji:"🟠", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/DoubleGloucester.jpg/400px-DoubleGloucester.jpg",                                                          rating:4.4, reviews:156, badge:null,  desc:"The cheese that rolls down Cooper's Hill every spring. Rich, smooth and mellow with a firm yet creamy texture. Coloured deep orange with annatto.", tags:["Cow's Milk","Hard","UK","Annatto"] },
  { id:46, name:"Caerphilly",           origin:"Wales, UK",                 type:"fresh", price:15.50, unit:"lb", emoji:"🏴󠁧󠁢󠁷󠁬󠁳󠁿", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caerphilly_Cheese_Close_Up.jpg/400px-Caerphilly_Cheese_Close_Up.jpg",                              rating:4.4, reviews:134, badge:null,  desc:"Wales's great contribution to cheese — mild, moist and slightly tangy with a crumbly white paste. Traditional miners' cheese for its high calcium.", tags:["Cow's Milk","Fresh","Wales","UK"] },
  { id:47, name:"Lancashire",           origin:"Lancashire, UK",            type:"fresh", price:15.99, unit:"lb", emoji:"🤍", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Lancashire_cheese.jpg/400px-Lancashire_cheese.jpg",                                                        rating:4.5, reviews:143, badge:null,  desc:"England's greatest toasting cheese — buttery, moist and crumbly with a clean tangy finish. Three varieties: Creamy, Tasty and Crumbly.", tags:["Cow's Milk","Fresh","UK","Crumbly"] },
  { id:48, name:"Vacherin Mont d'Or",   origin:"Jura, France",              type:"soft",  price:36.00, unit:"ea", emoji:"🌲", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Vacherin_Mont-d%27Or_AOP.jpg/400px-Vacherin_Mont-d%27Or_AOP.jpg",                                         rating:4.9, reviews:89,  badge:null,  desc:"The seasonal wonder — available Oct–March only. Spruce-bark wrapped, spoonable and intensely aromatic. Bake whole and dip bread into the molten centre.", tags:["Cow's Milk","Soft","Seasonal","AOP"] },
  { id:49, name:"Stinking Bishop",      origin:"Gloucestershire, UK",       type:"soft",  price:28.00, unit:"ea", emoji:"😤", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Stinking_bishop.jpg/400px-Stinking_bishop.jpg",                                                           rating:4.6, reviews:98,  badge:null,  desc:"Washed in perry — England's most pungent cheese. Wrinkled pink rind, oozy interior, massive aroma but surprisingly gentle flavour. Unforgettable.", tags:["Cow's Milk","Soft","Washed Rind","UK"] },
  { id:50, name:"Livarot AOP",          origin:"Calvados, France",          type:"soft",  price:22.99, unit:"ea", emoji:"🍊", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Livarot_AOP.jpg/400px-Livarot_AOP.jpg",                                                                   rating:4.5, reviews:87,  badge:null,  desc:"The 'Colonel of Normandy' — its rind is banded with sedge strips like a colonel's stripes. Washed-rind, deeply savoury. Normandy at its most assertive.", tags:["Cow's Milk","Soft","Washed Rind","AOP"] },
  { id:51, name:"Pont-l'Évêque AOP",   origin:"Calvados, France",          type:"soft",  price:21.50, unit:"ea", emoji:"🟤", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pont-l%27Eveque_cheese.jpg/400px-Pont-l%27Eveque_cheese.jpg",                                              rating:4.5, reviews:98,  badge:null,  desc:"One of Normandy's oldest cheeses — square-shaped with a golden washed rind. Smooth, supple and mild with a subtle barnyard aroma. Wonderful with cider.", tags:["Cow's Milk","Soft","Washed Rind","AOP"] },
  { id:52, name:"Ricotta Fresca",       origin:"Sicily, Italy",             type:"fresh", price:8.99,  unit:"lb", emoji:"🤍", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ricotta_cheese.jpg/400px-Ricotta_cheese.jpg",                                                             rating:4.6, reviews:267, badge:"New", desc:"Fresh whey cheese with a delicate milky sweetness. Light and airy — essential for cannoli, lasagne and cheesecake. Made the morning of delivery.", tags:["Cow's Milk","Fresh","Whey","Italy"] },
  { id:53, name:"Mascarpone",           origin:"Lombardy, Italy",           type:"fresh", price:9.99,  unit:"ea", emoji:"💛", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mascarpone_cheese.jpg/400px-Mascarpone_cheese.jpg",                                                        rating:4.8, reviews:334, badge:null,  desc:"Italy's luxurious triple-cream — velvety, sweet and impossibly rich. The soul of tiramisù. Outstanding stirred into risotto or spread on toast with honey.", tags:["Cow's Milk","Fresh","Triple Cream","Italy"] },
  { id:54, name:"Stracciatella di Bufala",origin:"Puglia, Italy",           type:"fresh", price:14.99, unit:"ea", emoji:"🥛", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Stracciatella_cheese.jpg/400px-Stracciatella_cheese.jpg",                                                  rating:4.9, reviews:198, badge:"New", desc:"The creamy shredded heart of burrata — buffalo milk cream mixed with torn mozzarella curd. Spoon directly onto pizza, bruschetta or summer vegetables.", tags:["Buffalo Milk","Fresh","Italy","Puglia"] },
  { id:55, name:"Fromage Blanc",        origin:"Loire Valley, France",      type:"fresh", price:7.99,  unit:"ea", emoji:"🤍", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Fromage_blanc_cheese.jpg/400px-Fromage_blanc_cheese.jpg",                                                  rating:4.5, reviews:145, badge:null,  desc:"French fresh cheese with the consistency of thick yogurt — tangy, light and versatile. Eat sweet with honey, savoury with herbs, or baked into tarts.", tags:["Cow's Milk","Fresh","Loire","France"] },
  { id:56, name:"Graviera Kritis DOP",  origin:"Crete, Greece",             type:"hard",  price:23.50, unit:"lb", emoji:"🏺", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Graviera_Kritis.jpg/400px-Graviera_Kritis.jpg",                                                           rating:4.6, reviews:112, badge:null,  desc:"Crete's prized hard cheese — aged 5 months in mountain dairies. Sweet, nutty and slightly caramelised. Greece's answer to Gruyère.", tags:["Sheep's Milk","Hard","Greece","DOP"] },
  { id:57, name:"Halloumi & Herbs",     origin:"Famagusta, Cyprus",         type:"fresh", price:15.99, unit:"lb", emoji:"🌿", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Halloumi_cheese.jpg/400px-Halloumi_cheese.jpg",                                                           rating:4.7, reviews:178, badge:null,  desc:"Classic Cypriot halloumi rolled in dried mint and thyme. Squeaky, salty and aromatic. Pan-fry until golden and serve with lemon.", tags:["Sheep's Milk","Fresh","Herbs","Cyprus"] },
  { id:58, name:"Montgomery's Cheddar", origin:"Somerset, UK",              type:"aged",  price:32.00, unit:"lb", emoji:"🟡", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Cheddar_Cheese_%28local%29.jpg/400px-Cheddar_Cheese_%28local%29.jpg",                                     rating:4.9, reviews:145, badge:null,  desc:"Britain's finest farmhouse cheddar — handmade at Manor Farm and cloth-bound for 12 months. Earthy, complex and intensely savoury with exceptional depth.", tags:["Cow's Milk","Hard","Raw Milk","Farmhouse"] },
  { id:59, name:"Coolea",               origin:"County Cork, Ireland",      type:"aged",  price:24.99, unit:"lb", emoji:"🍀", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Goudacheese.jpg/400px-Goudacheese.jpg",                                                                   rating:4.7, reviews:98,  badge:null,  desc:"Irish farmhouse Gouda-style cheese from the Cork mountains. Sweet and caramelly when young, developing deep nutty complexity with age.", tags:["Cow's Milk","Hard","Ireland","Farmhouse"] },
  { id:60, name:"Sbrinz AOP",           origin:"Central Switzerland",       type:"aged",  price:31.00, unit:"lb", emoji:"💛", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Gruy%C3%A8re.jpg/400px-Gruy%C3%A8re.jpg",                                                                 rating:4.7, reviews:78,  badge:null,  desc:"Switzerland's oldest cheese — harder than Parmesan and aged up to 3 years. Intensely nutty and granular. Used for centuries as a trading commodity.", tags:["Cow's Milk","Hard","Aged 3yr","AOP"] },
  { id:61, name:"Paneer",               origin:"Punjab, India",             type:"fresh", price:7.99,  unit:"lb", emoji:"🟨", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Paneer_cubes.jpg/400px-Paneer_cubes.jpg",                                                                 rating:4.6, reviews:312, badge:null,  desc:"Fresh Indian acid-set cheese — mild, firm and non-melting. Absorbs spices beautifully in curries, and can be grilled or fried. High protein, vegetarian.", tags:["Cow's Milk","Fresh","India","Vegetarian"] },
  { id:62, name:"Labneh",               origin:"Levant, Middle East",       type:"fresh", price:6.99,  unit:"ea", emoji:"🫙", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Labneh_with_olive_oil.jpg/400px-Labneh_with_olive_oil.jpg",                                               rating:4.6, reviews:234, badge:null,  desc:"Strained yogurt cheese from the Levant — tangy, thick and spreadable. Rolled in za'atar and olive oil it becomes a mezze essential.", tags:["Cow's Milk","Fresh","Levant","Strained"] },
  // ── 100 MORE CHEESES ───────────────────────────────────────────────────────
  // FRENCH
  { id:63,  name:"Morbier AOP",              origin:"Franche-Comté, France",    type:"soft",  price:23.00, unit:"lb", emoji:"⬛", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Morbier.jpg/400px-Morbier.jpg",                                                                            rating:4.6, reviews:187, badge:null,  desc:"Instantly recognisable by its dramatic black ash stripe running through the middle — a visual signature left from the original layer of soot separating morning and evening curds. Mild, creamy and slightly rubbery.", tags:["Cow's Milk","Soft","Franche-Comté","AOP"] },
  { id:64,  name:"Cantal AOP",               origin:"Auvergne, France",         type:"hard",  price:20.50, unit:"lb", emoji:"🟡", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Cantal_Cheese.jpg/400px-Cantal_Cheese.jpg",                                                                rating:4.6, reviews:156, badge:null,  desc:"One of the world's oldest cheeses — records date to before the Roman Empire. France's answer to Cheddar: firm, tangy and earthy. Young (Jeune), between (Entre-Deux) and aged (Vieux) versions available.", tags:["Cow's Milk","Hard","Auvergne","AOP"] },
  { id:65,  name:"Salers AOP",               origin:"Auvergne, France",         type:"hard",  price:27.00, unit:"lb", emoji:"🐄", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Salers_cheese.jpg/400px-Salers_cheese.jpg",                                                                rating:4.7, reviews:98,  badge:null,  desc:"Made exclusively in summer from Salers cattle grazing high alpine pastures. Earthy, complex and deeply flavourful — each wheel is a snapshot of the mountain meadow where the milk was collected.", tags:["Cow's Milk","Hard","Alpine","AOP"] },
  { id:66,  name:"Saint-Nectaire AOP",       origin:"Auvergne, France",         type:"soft",  price:21.99, unit:"ea", emoji:"🍄", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Saint-Nectaire_fromage.jpg/400px-Saint-Nectaire_fromage.jpg",                                              rating:4.7, reviews:134, badge:null,  desc:"Farmhouse washed-rind from the Auvergne volcanoes — velvety grey rind concealing a supple, milky interior with flavours of mushroom, hay and hazelnut. Louis XIV's favourite cheese.", tags:["Cow's Milk","Soft","Auvergne","AOP"] },
  { id:67,  name:"Munster-Géromé AOP",       origin:"Alsace, France",           type:"soft",  price:19.99, unit:"ea", emoji:"🟡", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Munster_cheese.jpg/400px-Munster_cheese.jpg",                                                              rating:4.5, reviews:143, badge:null,  desc:"Alsatian washed-rind cheese with a brick-red sticky exterior and a supple, mild-to-pungent paste inside. Traditionally eaten with caraway seeds and rye bread alongside Gewurztraminer.", tags:["Cow's Milk","Soft","Alsace","AOP"] },
  { id:68,  name:"Langres AOP",              origin:"Champagne, France",        type:"soft",  price:22.99, unit:"ea", emoji:"🔶", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Fromage_Langres.jpg/400px-Fromage_Langres.jpg",                                                            rating:4.6, reviews:87,  badge:null,  desc:"Distinctive cylinder with a concave top — the hollow is designed to fill with Champagne or Marc, which slowly seeps into the creamy interior. Washed rind, orange and deeply savoury.", tags:["Cow's Milk","Soft","Champagne","AOP"] },
  { id:69,  name:"Chaource AOP",             origin:"Champagne, France",        type:"soft",  price:18.50, unit:"ea", emoji:"⬜", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Chaource_cheese.jpg/400px-Chaource_cheese.jpg",                                                            rating:4.5, reviews:112, badge:null,  desc:"Bloomy-rind cylinder from the Aube — chalk-white outside with a lusciously creamy, slightly acidic paste. At its best when the centre is still firm and chalky. Pairs beautifully with Chablis.", tags:["Cow's Milk","Soft","Champagne","AOP"] },
  { id:70,  name:"Brillat-Savarin",          origin:"Normandy, France",         type:"fresh", price:26.99, unit:"ea", emoji:"💛", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Brillat-Savarin_cheese.jpg/400px-Brillat-Savarin_cheese.jpg",                                              rating:4.8, reviews:167, badge:null,  desc:"Named after the great gastronome — a triple-cream marvel of 75% fat. Impossibly buttery, rich and decadent with a pillowy white rind. Best eaten with wild strawberries or a glass of Champagne.", tags:["Cow's Milk","Fresh","Triple Cream","Normandy"] },
  { id:71,  name:"Crottin de Chavignol AOP", origin:"Loire Valley, France",     type:"fresh", price:9.99,  unit:"ea", emoji:"🐐", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Crottin_de_Chavignol.jpg/400px-Crottin_de_Chavignol.jpg",                                                  rating:4.6, reviews:143, badge:null,  desc:"The Loire's most famous goat cheese — small, dense rounds that transform from mild and milky when young to fierce and crumbly when aged. The word 'crottin' translates rather unglamorously as 'horse dung.'", tags:["Goat's Milk","Fresh","Loire","AOP"] },
  { id:72,  name:"Valençay AOP",             origin:"Berry, France",            type:"fresh", price:10.99, unit:"ea", emoji:"🔺", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Valencay.jpg/400px-Valencay.jpg",                                                                          rating:4.6, reviews:112, badge:null,  desc:"Napoleon supposedly lopped off its original pyramid tip with his sword after returning from a failed Egyptian campaign. Ash-coated goat cheese — tangy, lemony and woodsy.", tags:["Goat's Milk","Fresh","Loire","AOP"] },
  { id:73,  name:"Selles-sur-Cher AOP",      origin:"Loire Valley, France",     type:"fresh", price:11.50, unit:"ea", emoji:"⬛", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Selles-sur-Cher_fromage_AOP.jpg/400px-Selles-sur-Cher_fromage_AOP.jpg",                                   rating:4.7, reviews:98,  badge:null,  desc:"Flat disc of Loire goat cheese dusted in black ash — impossibly elegant in appearance. Gentle and milky when fresh, developing a longer, mineral finish with age.", tags:["Goat's Milk","Fresh","Loire","AOP"] },
  { id:74,  name:"Rocamadour AOP",           origin:"Quercy, France",           type:"fresh", price:8.99,  unit:"ea", emoji:"🐐", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Rocamadour_cheese.jpg/400px-Rocamadour_cheese.jpg",                                                        rating:4.5, reviews:87,  badge:null,  desc:"Tiny disc of goat cheese named after the medieval clifftop village. Just 35g each, but packed with flavour — buttery and nutty when young, sharper and more intense with age.", tags:["Goat's Milk","Fresh","Quercy","AOP"] },
  { id:75,  name:"Délice de Bourgogne",      origin:"Burgundy, France",         type:"fresh", price:24.99, unit:"ea", emoji:"💛", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Delice_de_bourgogne.jpg/400px-Delice_de_bourgogne.jpg",                                                    rating:4.8, reviews:134, badge:"New", desc:"Burgundy's answer to Brillat-Savarin — another triple-cream giant with a pillowy Camembert-like rind and a centre so rich and buttery it borders on obscene. Serve with Champagne and zero guilt.", tags:["Cow's Milk","Fresh","Triple Cream","Burgundy"] },
  // SPANISH
  { id:76,  name:"Torta del Casar DOP",      origin:"Extremadura, Spain",       type:"soft",  price:38.00, unit:"ea", emoji:"🫙", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Torta_del_Casar.jpg/400px-Torta_del_Casar.jpg",                                                            rating:4.8, reviews:87,  badge:null,  desc:"Spain's most dramatic cheese — curdled with wild thistle flowers, this runny sheep's milk torta is sliced open like a lid and scooped with a spoon. Intensely bitter, creamy and utterly addictive.", tags:["Sheep's Milk","Soft","Extremadura","DOP"] },
  { id:77,  name:"Tetilla DOP",              origin:"Galicia, Spain",           type:"soft",  price:17.50, unit:"ea", emoji:"🍑", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Queso_tetilla.jpg/400px-Queso_tetilla.jpg",                                                                rating:4.5, reviews:112, badge:null,  desc:"Galicia's iconic cone-shaped cheese — named for its distinctive shape. Mild, buttery and slightly elastic with a thin yellowish rind. Melts beautifully and is ubiquitous across northwest Spain.", tags:["Cow's Milk","Soft","Galicia","DOP"] },
  { id:78,  name:"Mahón-Menorca DOP",        origin:"Balearic Islands, Spain",  type:"hard",  price:22.50, unit:"lb", emoji:"🟡", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Queso_Mahon.jpg/400px-Queso_Mahon.jpg",                                                                    rating:4.6, reviews:98,  badge:null,  desc:"Menorca's famous square-cornered cheese — firm with a moist, springy texture. Aged from creamy and mild (tierno) to sharp and granular (añejo). Rubbed with olive oil and paprika during aging.", tags:["Cow's Milk","Hard","Balearics","DOP"] },
  { id:79,  name:"Gamoneu DOP",              origin:"Asturias, Spain",          type:"blue",  price:34.00, unit:"lb", emoji:"💚", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Cabrales_cheese.jpg/400px-Cabrales_cheese.jpg",                                                             rating:4.7, reviews:76,  badge:null,  desc:"Rare smoked blue from the Asturian mountains — lightly smoked over cherry and birch wood before being cave-aged. Complex, smoky, blue-veined and magnificent. Far less well-known than Cabrales, but equally brilliant.", tags:["Blended Milk","Blue","Smoked","DOP"] },
  { id:80,  name:"San Simón da Costa DOP",   origin:"Galicia, Spain",           type:"hard",  price:19.99, unit:"lb", emoji:"🔥", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Idiazabal_cheese.jpg/400px-Idiazabal_cheese.jpg",                                                           rating:4.6, reviews:89,  badge:null,  desc:"Galicia's teardrop-shaped smoked cheese — hot-smoked over birch wood for two weeks, giving it an orange skin and a distinctly smoky, buttery interior. Slice thin and eat on bread.", tags:["Cow's Milk","Hard","Smoked","DOP"] },
  // PORTUGUESE
  { id:81,  name:"Serra da Estrela DOP",     origin:"Beira Alta, Portugal",     type:"soft",  price:42.00, unit:"ea", emoji:"⛰️", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Serra_da_estrela.jpg/400px-Serra_da_estrela.jpg",                                                          rating:4.9, reviews:67,  badge:null,  desc:"Portugal's greatest cheese — a thistle-flower-curdled sheep's milk masterpiece made only in winter. Sliced open and scooped with a spoon from the runny centre. Intensely complex, rich and slightly bitter.", tags:["Sheep's Milk","Soft","Portugal","DOP"] },
  { id:82,  name:"São Jorge DOP",            origin:"Azores, Portugal",         type:"hard",  price:25.00, unit:"lb", emoji:"🌊", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Goudacheese.jpg/400px-Goudacheese.jpg",                                                                    rating:4.7, reviews:89,  badge:null,  desc:"From the volcanic Azores island of São Jorge — a firm, sharp cow's milk cheese aged 3–7 months. Spicy, piquant and long-lasting on the palate. The pride of Azorean cheesemaking.", tags:["Cow's Milk","Hard","Azores","DOP"] },
  { id:83,  name:"Queijo de Azeitão DOP",    origin:"Setúbal, Portugal",        type:"soft",  price:29.00, unit:"ea", emoji:"🫙", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Serra_da_estrela.jpg/400px-Serra_da_estrela.jpg",                                                           rating:4.7, reviews:54,  badge:null,  desc:"Miniature version of Serra da Estrela — small rounds of thistle-curdled sheep's milk. Spoonable, buttery and intensely sheepy. One of Portugal's most celebrated artisan products.", tags:["Sheep's Milk","Soft","Portugal","DOP"] },
  // ITALIAN
  { id:84,  name:"Scamorza Affumicata",      origin:"Campania, Italy",          type:"fresh", price:14.99, unit:"ea", emoji:"💨", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Scamorza.jpg/400px-Scamorza.jpg",                                                                          rating:4.6, reviews:178, badge:null,  desc:"Pear-shaped stretched-curd cheese cold-smoked over straw. Firm, rubbery and delicately smoky — extraordinary melted on pizza, grilled, or sliced cold. The smoked cousin of fresh mozzarella.", tags:["Cow's Milk","Fresh","Smoked","Italy"] },
  { id:85,  name:"Caciocavallo Silano DOP",  origin:"Southern Italy",           type:"hard",  price:20.99, unit:"lb", emoji:"🐴", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Caciocavallo.jpg/400px-Caciocavallo.jpg",                                                                   rating:4.6, reviews:134, badge:null,  desc:"'Cheese on horseback' — hung in pairs over a wooden beam to age. Pasta filata cheese with a firm, smooth paste. Young versions are mild and springy; aged Caciocavallo becomes peppery and complex.", tags:["Cow's Milk","Hard","Southern Italy","DOP"] },
  { id:86,  name:"Fiore Sardo DOP",          origin:"Sardinia, Italy",          type:"hard",  price:24.50, unit:"lb", emoji:"🌸", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Fiore_Sardo.jpg/400px-Fiore_Sardo.jpg",                                                                    rating:4.7, reviews:89,  badge:null,  desc:"Sardinia's ancient pecorino — made in traditional wooden moulds carved with a flower motif. Smoked, then aged in caves. Sharp, smoky and deeply pastoral. Italy's most characterful sheep's milk cheese.", tags:["Sheep's Milk","Hard","Sardinia","DOP"] },
  { id:87,  name:"Montasio DOP",             origin:"Friuli-Venezia Giulia, IT",type:"hard",  price:19.99, unit:"lb", emoji:"🏔️", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Montasio.jpg/400px-Montasio.jpg",                                                                         rating:4.5, reviews:112, badge:null,  desc:"Alpine Friulian cheese made since the 13th century by Benedictine monks. Mild and milky when young (Fresco), nutty and firm when aged (Stravecchio). Essential for the Friulian potato dish Frico.", tags:["Cow's Milk","Hard","Friuli","DOP"] },
  { id:88,  name:"Robiola di Roccaverano",   origin:"Piedmont, Italy",          type:"fresh", price:13.99, unit:"ea", emoji:"🤍", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Robiola.jpg/400px-Robiola.jpg",                                                                            rating:4.6, reviews:98,  badge:null,  desc:"Italy's most celebrated fresh goat cheese — delicate, snowy white and made from pure goat's milk (or a blend). Tangy, creamy and slightly chalky. Melt it over warm bread or eat straight.", tags:["Goat's Milk","Fresh","Piedmont","DOP"] },
  { id:89,  name:"Castelmagno DOP",          origin:"Piedmont, Italy",          type:"blue",  price:36.00, unit:"lb", emoji:"💜", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gorgonzola_--_Di_Giovanna_--_cut.jpg/400px-Gorgonzola_--_Di_Giovanna_--_cut.jpg",                          rating:4.7, reviews:78,  badge:null,  desc:"One of Italy's rarest and oldest cheeses — crumbly, intensely flavoured blue from the Cuneo Alps. Aged in limestone caves, it develops blue veins naturally. Extraordinary crumbled over gnocchi with butter.", tags:["Cow's Milk","Blue","Piedmont","DOP"] },
  { id:90,  name:"Squacquerone di Romagna",  origin:"Emilia-Romagna, Italy",    type:"fresh", price:9.99,  unit:"ea", emoji:"💧", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Squacquerone.jpg/400px-Squacquerone.jpg",                                                                   rating:4.5, reviews:134, badge:null,  desc:"Emilia-Romagna's beloved spreadable fresh cheese — almost liquid in consistency, with a bright, tangy, milky flavour. The classic filling for piadina flatbread with prosciutto and rocket.", tags:["Cow's Milk","Fresh","Emilia-Romagna","DOP"] },
  { id:91,  name:"Ragusano DOP",             origin:"Sicily, Italy",            type:"hard",  price:23.00, unit:"lb", emoji:"📦", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Caciocavallo.jpg/400px-Caciocavallo.jpg",                                                                   rating:4.5, reviews:87,  badge:null,  desc:"Sicilian stretched-curd cheese aged in large rectangular blocks. The rind is rubbed with olive oil during aging. Firm, sweet and milky when young — spicy and assertive when aged over a year.", tags:["Cow's Milk","Hard","Sicily","DOP"] },
  { id:92,  name:"Pecorino Sardo DOP",       origin:"Sardinia, Italy",          type:"hard",  price:21.50, unit:"lb", emoji:"🐑", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Pecorino_romano.jpg/400px-Pecorino_romano.jpg",                                                             rating:4.6, reviews:123, badge:null,  desc:"Sardinian sheep's milk cheese in two styles: Dolce (sweet, soft, aged 20–60 days) and Maturo (mature, firm, aged over 2 months with a more assertive bite). Both are outstanding on cheeseboards.", tags:["Sheep's Milk","Hard","Sardinia","DOP"] },
  { id:93,  name:"Pecorino Toscano DOP",     origin:"Tuscany, Italy",           type:"hard",  price:20.00, unit:"lb", emoji:"🌻", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Pecorino_romano.jpg/400px-Pecorino_romano.jpg",                                                             rating:4.6, reviews:145, badge:null,  desc:"Tuscany's elegant pecorino — milder and more refined than Romano. Young versions are soft and milky; aged versions firm up with floral, grassy notes from the Tuscan pastures.", tags:["Sheep's Milk","Hard","Tuscany","DOP"] },
  // GREEK
  { id:94,  name:"Kasseri DOP",              origin:"Macedonia, Greece",        type:"hard",  price:18.99, unit:"lb", emoji:"🏛️", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Kasseri_cheese.jpg/400px-Kasseri_cheese.jpg",                                                              rating:4.5, reviews:134, badge:null,  desc:"Greece's classic pasta-filata cheese — springy, mild and slightly salty. Essential for saganaki (pan-fried flambéed cheese). Made from sheep's milk with up to 20% goat milk. Stretchy when warm.", tags:["Sheep's Milk","Hard","Greece","DOP"] },
  { id:95,  name:"Manouri PDO",              origin:"Macedonia, Greece",        type:"fresh", price:16.00, unit:"lb", emoji:"🤍", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Manouri.jpg/400px-Manouri.jpg",                                                                            rating:4.6, reviews:89,  badge:null,  desc:"Greece's finest fresh cheese — a rich whey cheese enriched with cream. Snowy white, crumbly yet creamy, and mildly sweet. Outstanding drizzled with thyme honey or baked in spanakopita.", tags:["Sheep's Milk","Fresh","Greece","PDO"] },
  { id:96,  name:"Kefalograviera DOP",       origin:"Epirus, Greece",           type:"hard",  price:22.00, unit:"lb", emoji:"🏺", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Kefalograviera.jpg/400px-Kefalograviera.jpg",                                                              rating:4.6, reviews:76,  badge:null,  desc:"A cross between Kefalotyri and Graviera — firm, slightly salty and excellent for frying (saganaki) or grating over pasta. Made in Epirus from sheep's milk with high mountain flavour.", tags:["Sheep's Milk","Hard","Greece","DOP"] },
  { id:97,  name:"Myzithra",                 origin:"Crete, Greece",            type:"fresh", price:11.99, unit:"lb", emoji:"🤍", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Myzithra.jpg/400px-Myzithra.jpg",                                                                          rating:4.4, reviews:98,  badge:null,  desc:"Ancient Greek whey cheese made since antiquity. Fresh versions are soft and milky; aged versions (Xerotyri) are hard, dry and intensely salty — grated over pasta just like Parmesan.", tags:["Sheep's Milk","Fresh","Greece","Traditional"] },
  // UK & IRELAND
  { id:98,  name:"Stichelton",               origin:"Nottinghamshire, UK",      type:"blue",  price:34.00, unit:"lb", emoji:"🔵", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Stilton_2.jpg/400px-Stilton_2.jpg",                                                                         rating:4.9, reviews:87,  badge:null,  desc:"Raw-milk blue cheese made by Joe Schneider to the original Stilton recipe. PDO rules require pasteurised milk — so this can't be called Stilton. Deeper, more complex and more alive than pasteurised versions.", tags:["Cow's Milk","Blue","Raw Milk","UK"] },
  { id:99,  name:"Shropshire Blue",          origin:"Nottinghamshire, UK",      type:"blue",  price:26.50, unit:"lb", emoji:"🟠", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Shropshire_Blue.jpg/400px-Shropshire_Blue.jpg",                                                             rating:4.7, reviews:112, badge:null,  desc:"Stilton's flamboyant orange cousin — annatto gives it a gorgeous sunset colour while the blue veining adds bold, savoury depth. Mellow and creamy, it's often preferred over Stilton by first-timers.", tags:["Cow's Milk","Blue","UK","Annatto"] },
  { id:100, name:"Berkswell",                origin:"West Midlands, UK",        type:"hard",  price:28.00, unit:"lb", emoji:"🐑", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Queso_Manchego.jpg/400px-Queso_Manchego.jpg",                                                               rating:4.8, reviews:76,  badge:null,  desc:"England's answer to Manchego — hard sheep's milk cheese from Ram Hall Farm. Nutty, caramel-sweet and rich with a firm, crystalline texture after aging. Made in a distinctive flying-saucer shape.", tags:["Sheep's Milk","Hard","UK","Farmhouse"] },
  { id:101, name:"Lincolnshire Poacher",     origin:"Lincolnshire, UK",         type:"hard",  price:27.50, unit:"lb", emoji:"🟡", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Cheddar_Cheese_%28local%29.jpg/400px-Cheddar_Cheese_%28local%29.jpg",                                      rating:4.8, reviews:89,  badge:null,  desc:"Made by Simon Jones on his farm near the Lincolnshire Wolds — a complex, nutty Alpine-style hard cheese that's won countless awards. Part Gruyère, part Cheddar in character. Exceptional.", tags:["Cow's Milk","Hard","UK","Farmhouse"] },
  { id:102, name:"Quicke's Cheddar",         origin:"Devon, UK",                type:"aged",  price:30.00, unit:"lb", emoji:"🟡", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Cheddar_Cheese_%28local%29.jpg/400px-Cheddar_Cheese_%28local%29.jpg",                                      rating:4.8, reviews:98,  badge:null,  desc:"Cloth-bound farmhouse cheddar from Newton St Cyres — rich, buttery and complex with a long savoury finish. Made by Mary Quicke whose family has farmed there for 14 generations. Aged 12–24 months.", tags:["Cow's Milk","Hard","Devon","Farmhouse"] },
  { id:103, name:"Stinking Bishop (Wheel)",  origin:"Gloucestershire, UK",      type:"soft",  price:55.00, unit:"ea", emoji:"😤", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Stinking_bishop.jpg/400px-Stinking_bishop.jpg",                                                           rating:4.7, reviews:54,  badge:null,  desc:"Full wheel of Charles Martell's infamous perry-washed cheese. Intense, barnyard aroma concealing a gentle, creamy paste. Order for a special occasion — it's an experience you won't forget.", tags:["Cow's Milk","Soft","Washed Rind","UK"] },
  { id:104, name:"Gubbeen",                  origin:"County Cork, Ireland",     type:"soft",  price:24.00, unit:"ea", emoji:"🍀", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Gubbeen.jpg/400px-Gubbeen.jpg",                                                                            rating:4.7, reviews:87,  badge:null,  desc:"Cork farmhouse washed-rind cheese from the Ferguson family — pink-orange rind, supple and creamy interior with earthy, bacon-like notes. The neighbouring smokehouse also does a smoked version.", tags:["Cow's Milk","Soft","Ireland","Farmhouse"] },
  { id:105, name:"Durrus",                   origin:"County Cork, Ireland",     type:"soft",  price:22.00, unit:"ea", emoji:"🍀", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Gubbeen.jpg/400px-Gubbeen.jpg",                                                                            rating:4.7, reviews:76,  badge:null,  desc:"Washed-rind treasure from the Sheep's Head peninsula in West Cork — meaty, earthy and deeply pastoral. Made by Jeffa Gill since 1979, one of Ireland's pioneering artisan cheesemakers.", tags:["Cow's Milk","Soft","Ireland","Farmhouse"] },
  // SWISS / GERMAN / AUSTRIAN
  { id:106, name:"Tilsit",                   origin:"Germany / Switzerland",    type:"soft",  price:16.99, unit:"lb", emoji:"🟡", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tilsiter_cheese.jpg/400px-Tilsiter_cheese.jpg",                                                            rating:4.4, reviews:134, badge:null,  desc:"Semi-soft washed-rind cheese with small irregular holes and a pungent orange rind. Milder than Limburger — creamy, slightly spicy and excellent melted in sandwiches or Reuben-style dishes.", tags:["Cow's Milk","Soft","Germany","Washed Rind"] },
  { id:107, name:"Limburger",                origin:"Limburg, Belgium",         type:"soft",  price:14.99, unit:"ea", emoji:"😤", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Limburger_cheese.jpg/400px-Limburger_cheese.jpg",                                                          rating:4.3, reviews:123, badge:null,  desc:"The cheese that made 'smelly cheese' famous — its rind hosts the same bacteria as human skin, creating a foot-like aroma. The interior is mild, creamy and surprisingly pleasant. Serve with rye bread and onions.", tags:["Cow's Milk","Soft","Belgium","Washed Rind"] },
  { id:108, name:"Vorarlberger Bergkäse",    origin:"Vorarlberg, Austria",      type:"hard",  price:25.50, unit:"lb", emoji:"⛰️", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Bergkaese.jpg/400px-Bergkaese.jpg",                                                                        rating:4.7, reviews:87,  badge:null,  desc:"Austrian Alpine treasure — made from summer mountain pasture milk and aged 4+ months. Nutty, sweet and complex with a hint of alpine flowers. Slightly sweeter than Gruyère, equally magnificent.", tags:["Cow's Milk","Hard","Alpine","Austria"] },
  { id:109, name:"Allgäuer Emmentaler",      origin:"Bavaria, Germany",         type:"hard",  price:20.00, unit:"lb", emoji:"🕳️", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Emmental_Cheese.jpg/400px-Emmental_Cheese.jpg",                                                           rating:4.5, reviews:112, badge:null,  desc:"Bavarian mountain Emmental — mild, sweet and nutty with characteristic large holes. Made in 90 kg wheels in traditional Allgäu dairies. Excellent in fondue and for every sandwich application.", tags:["Cow's Milk","Hard","Bavaria","Germany"] },
  // DUTCH / NORDIC
  { id:110, name:"Leyden (Leidse Kaas)",     origin:"South Holland, Netherlands",type:"hard", price:17.99, unit:"lb", emoji:"🌿", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Leidse_kaas.jpg/400px-Leidse_kaas.jpg",                                                                   rating:4.5, reviews:98,  badge:null,  desc:"Cumin-spiced Gouda-style cheese from the outskirts of Leiden. The caraway and cumin seeds punctuate each bite with warmth. Firm, semi-hard and endlessly snackable. Pairs brilliantly with dark beer.", tags:["Cow's Milk","Hard","Netherlands","Spiced"] },
  { id:111, name:"Maasdam",                  origin:"Netherlands",              type:"hard",  price:14.99, unit:"lb", emoji:"🕳️", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Maasdam_cheese.jpg/400px-Maasdam_cheese.jpg",                                                             rating:4.5, reviews:167, badge:null,  desc:"Dutch Emmental-style cheese with large holes and a sweeter, milder flavour than Swiss Emmental. Produced to replicate the success of Emmental while using Dutch milk. Great for fondue and melting.", tags:["Cow's Milk","Hard","Netherlands","Mild"] },
  { id:112, name:"Beemster Classic",         origin:"North Holland, Netherlands",type:"aged", price:22.00, unit:"lb", emoji:"🧡", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Goudacheese.jpg/400px-Goudacheese.jpg",                                                                    rating:4.7, reviews:145, badge:null,  desc:"Aged Gouda from the Beemster polder, reclaimed from the sea in 1612. Rich caramel flavours with pronounced butterscotch sweetness and the crunch of protein crystals. 18 months aged.", tags:["Cow's Milk","Hard","Netherlands","Aged 18mo"] },
  { id:113, name:"Brunost (Gjetost)",        origin:"Norway",                   type:"fresh", price:12.99, unit:"ea", emoji:"🍫", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Brunost.jpg/400px-Brunost.jpg",                                                                            rating:4.2, reviews:234, badge:null,  desc:"Norway's unique brown cheese — made from caramelised whey, giving it a fudge-like consistency and a sweet, slightly goaty flavour. Sliced thin with a cheese plane and eaten on crispbread. Deeply Norwegian.", tags:["Goat's Milk","Fresh","Norway","Whey"] },
  { id:114, name:"Västerbottensost",         origin:"Västerbotten, Sweden",     type:"hard",  price:28.00, unit:"lb", emoji:"🌲", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/V%C3%A4sterbottensost.jpg/400px-V%C3%A4sterbottensost.jpg",                                               rating:4.8, reviews:89,  badge:null,  desc:"Sweden's most treasured cheese — made by a single dairy in northern Sweden since 1872. Firm, grainy and intensely savoury with a sharp, complex finish. Essential for Swedish midsummer parties with crayfish.", tags:["Cow's Milk","Hard","Sweden","Artisan"] },
  // AMERICAN
  { id:115, name:"Humboldt Fog",             origin:"California, USA",          type:"soft",  price:24.99, unit:"lb", emoji:"🌁", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Humboldt_Fog_Cheese.jpg/400px-Humboldt_Fog_Cheese.jpg",                                                    rating:4.9, reviews:198, badge:null,  desc:"Cypress Grove's iconic ash-layered goat cheese — a stunning visual with concentric rings of grey ash through the snowy paste. Tangy, citrusy and complex. One of America's great artisan cheeses.", tags:["Goat's Milk","Soft","California","Artisan"] },
  { id:116, name:"Rogue River Blue",         origin:"Oregon, USA",              type:"blue",  price:45.00, unit:"lb", emoji:"🍂", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/RoquefortFR.jpg/400px-RoquefortFR.jpg",                                                                    rating:4.9, reviews:87,  badge:null,  desc:"World's Best Cheese 2019. Made only in autumn from peak-season milk, wrapped in Syrah-soaked pear leaves. Creamy, sweet and intensely blue. One of the finest cheeses made in America — full stop.", tags:["Cow's Milk","Blue","Oregon","Seasonal"] },
  { id:117, name:"Bayley Hazen Blue",        origin:"Vermont, USA",             type:"blue",  price:32.00, unit:"lb", emoji:"🫐", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/RoquefortFR.jpg/400px-RoquefortFR.jpg",                                                                    rating:4.8, reviews:112, badge:null,  desc:"Jasper Hill's acclaimed Vermont blue — raw cow's milk with a natural rind and dense, fudgy paste. Notes of anise, nuts and dark chocolate beneath the blue punch. One of the USA's most awarded cheeses.", tags:["Cow's Milk","Blue","Vermont","Raw Milk"] },
  { id:118, name:"Pleasant Ridge Reserve",   origin:"Wisconsin, USA",           type:"hard",  price:35.00, unit:"lb", emoji:"🏆", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/BeaufortCheese.jpg/400px-BeaufortCheese.jpg",                                                              rating:4.9, reviews:98,  badge:null,  desc:"America's most award-winning cheese — an Alpine-style made by Uplands Cheese in summer only from pasture-grazed cows. Complex, fruity and beautifully structured. Think Beaufort meets American terroir.", tags:["Cow's Milk","Hard","Wisconsin","Alpine-style"] },
  { id:119, name:"Midnight Moon",            origin:"California, USA",          type:"aged",  price:26.00, unit:"lb", emoji:"🌙", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Goudacheese.jpg/400px-Goudacheese.jpg",                                                                   rating:4.8, reviews:145, badge:null,  desc:"Aged goat Gouda from Cypress Grove — smooth, caramel-sweet and packed with crunchy protein crystals. Far more approachable than fresh goat cheeses. One of America's best-selling artisan cheeses.", tags:["Goat's Milk","Aged","California","Artisan"] },
  { id:120, name:"Winnimere",                origin:"Vermont, USA",             type:"soft",  price:38.00, unit:"ea", emoji:"🌲", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Vacherin_Mont-d%27Or_AOP.jpg/400px-Vacherin_Mont-d%27Or_AOP.jpg",                                         rating:4.8, reviews:67,  badge:null,  desc:"Jasper Hill's seasonal spruce-bark-wrapped beauty — a Vermont answer to Vacherin Mont d'Or. Spoonable, boozy and deeply flavourful from the cows' winter hay diet. Made Oct–May only.", tags:["Cow's Milk","Soft","Vermont","Seasonal"] },
  { id:121, name:"Hook's 10-Year Cheddar",   origin:"Wisconsin, USA",           type:"aged",  price:48.00, unit:"lb", emoji:"🟡", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Cheddar_Cheese_%28local%29.jpg/400px-Cheddar_Cheese_%28local%29.jpg",                                     rating:4.9, reviews:78,  badge:null,  desc:"Tony and Julie Hook have been aging this Wisconsin Cheddar for a decade. Extraordinary — bold, crystalline, and intensely savoury with deep caramel notes. One of the sharpest cheddars in existence.", tags:["Cow's Milk","Hard","Aged 10yr","Wisconsin"] },
  // MEXICAN
  { id:122, name:"Queso Oaxaca",             origin:"Oaxaca, Mexico",           type:"fresh", price:11.99, unit:"lb", emoji:"🧶", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Queso_oaxaca.jpg/400px-Queso_oaxaca.jpg",                                                                  rating:4.6, reviews:267, badge:null,  desc:"Mexico's mozzarella — a pasta-filata string cheese wound into a ball. Mild, milky and incredibly melty. Essential for quesadillas, tlayudas and Oaxacan black bean dishes. Pull it apart like string cheese.", tags:["Cow's Milk","Fresh","Mexico","Melting"] },
  { id:123, name:"Cotija Añejo",             origin:"Michoacán, Mexico",        type:"hard",  price:13.99, unit:"lb", emoji:"⬜", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Cotija_Cheese.jpg/400px-Cotija_Cheese.jpg",                                                               rating:4.6, reviews:198, badge:null,  desc:"Mexico's Parmesan — a hard, crumbly, intensely salty aged cheese. Grated over elote (corn), tacos, enchiladas and beans. Named after the town of Cotija in Michoacán. Firm, white and boldly flavoured.", tags:["Cow's Milk","Hard","Mexico","Aged"] },
  { id:124, name:"Queso Panela",             origin:"Jalisco, Mexico",          type:"fresh", price:8.99,  unit:"lb", emoji:"🤍", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Panela_cheese.jpg/400px-Panela_cheese.jpg",                                                               rating:4.4, reviews:145, badge:null,  desc:"Fresh Mexican basket cheese — milky, soft and slightly rubbery. Doesn't melt when heated, so it grills and fries beautifully. Low-fat, high-protein. Crumble over salads or slice for sandwiches.", tags:["Cow's Milk","Fresh","Mexico","Low Fat"] },
  { id:125, name:"Queso Fresco",             origin:"Mexico",                   type:"fresh", price:7.99,  unit:"lb", emoji:"🤍", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Panela_cheese.jpg/400px-Panela_cheese.jpg",                                                               rating:4.4, reviews:234, badge:null,  desc:"The workhorse of Mexican cuisine — fresh, white, crumbly and mildly salty. Crumbled over everything from tacos and enchiladas to soups and salads. Simple, versatile and universally loved.", tags:["Cow's Milk","Fresh","Mexico","Crumbly"] },
  // REST OF WORLD
  { id:126, name:"Halloumi Truffle",         origin:"Limassol, Cyprus",         type:"fresh", price:22.99, unit:"lb", emoji:"🍄", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Halloumi_cheese.jpg/400px-Halloumi_cheese.jpg",                                                           rating:4.8, reviews:89,  badge:"New", desc:"Luxury Cypriot halloumi blended with shaved black truffle — the squeaky, salty character of halloumi elevated to fine dining territory. Pan-fry until golden and serve immediately.", tags:["Sheep's Milk","Fresh","Truffle","Cyprus"] },
  { id:127, name:"Brie with Truffles",       origin:"Île-de-France, France",    type:"soft",  price:32.00, unit:"ea", emoji:"🍄", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Brie_de_Meaux_Rouzaire.jpg/400px-Brie_de_Meaux_Rouzaire.jpg",                                              rating:4.9, reviews:112, badge:"New", desc:"Double-cream Brie layered with shaved Périgord black truffles — the truffle aroma permeates the creamy paste completely. Outrageously indulgent. Serve at room temperature with a glass of Burgundy.", tags:["Cow's Milk","Soft","Truffle","France"] },
  { id:128, name:"Aged Gouda with Cumin",    origin:"Noord-Holland, Netherlands",type:"aged", price:24.99, unit:"lb", emoji:"🌿", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Goudacheese.jpg/400px-Goudacheese.jpg",                                                                    rating:4.7, reviews:167, badge:null,  desc:"Mature Gouda studded throughout with whole cumin seeds — the earthy warmth of the spice balances the caramel sweetness of the aged cheese perfectly. A classic Dutch combination.", tags:["Cow's Milk","Hard","Netherlands","Spiced"] },
  { id:129, name:"Smoked Cheddar",           origin:"Vermont, USA",             type:"aged",  price:18.99, unit:"lb", emoji:"💨", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Cheddar_Cheese_%28local%29.jpg/400px-Cheddar_Cheese_%28local%29.jpg",                                     rating:4.6, reviews:198, badge:null,  desc:"Sharp Vermont Cheddar cold-smoked over applewood chips. The smoke adds a gentle campfire note without overpowering the sharp, tangy cheddar character. Exceptional in grilled cheese.", tags:["Cow's Milk","Hard","Smoked","USA"] },
  { id:130, name:"Grana Padano DOP",         origin:"Po Valley, Italy",         type:"aged",  price:18.50, unit:"lb", emoji:"🧀", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Parmigiano_reggiano.jpg/400px-Parmigiano_reggiano.jpg",                                                    rating:4.7, reviews:312, badge:null,  desc:"Parmesan's hardworking sibling — produced across the Po Valley with slightly younger aging (9+ months vs 24). Milder and less complex but still excellent for grating, and considerably more affordable.", tags:["Cow's Milk","Hard","Italy","DOP"] },
  { id:131, name:"Parmigiano 36-Month",      origin:"Emilia-Romagna, Italy",    type:"aged",  price:42.00, unit:"lb", emoji:"🧀", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Parmigiano_reggiano.jpg/400px-Parmigiano_reggiano.jpg",                                                    rating:5.0, reviews:134, badge:null,  desc:"Extra-aged Parmigiano-Reggiano at 36 months — even more granular, nutty and intensely flavoured than standard 24-month. Eat in chunks with aged balsamic and honey. The pinnacle of hard cheese.", tags:["Cow's Milk","Hard","Aged 36mo","Italy"] },
  { id:132, name:"Smoked Gouda",             origin:"Noord-Holland, Netherlands",type:"aged", price:16.99, unit:"lb", emoji:"💨", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Goudacheese.jpg/400px-Goudacheese.jpg",                                                                    rating:4.6, reviews:234, badge:null,  desc:"Young Gouda cold-smoked over hickory chips to create a golden-brown rind and smoky, creamy interior. Mild, sweet and approachable. One of the world's most universally loved cheeses.", tags:["Cow's Milk","Soft","Netherlands","Smoked"] },
  { id:133, name:"Aged Manchego (2 Year)",   origin:"La Mancha, Spain",         type:"aged",  price:28.00, unit:"lb", emoji:"🐑", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Queso_Manchego.jpg/400px-Queso_Manchego.jpg",                                                             rating:4.8, reviews:145, badge:null,  desc:"Two-year aged Manchego — considerably more intense than standard 6-month Curado. Darker interior, complex notes of caramel, dried fruit and roasted nuts. The best Manchego you'll ever taste.", tags:["Sheep's Milk","Hard","Spain","Aged 2yr"] },
  { id:134, name:"Midnight Moon (Aged 2yr)", origin:"Netherlands",              type:"aged",  price:32.00, unit:"lb", emoji:"🌙", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Goudacheese.jpg/400px-Goudacheese.jpg",                                                                   rating:4.9, reviews:89,  badge:null,  desc:"The premium version of the beloved goat Gouda — aged two full years for an even deeper caramel sweetness and crunchier crystal texture. An extraordinary dessert cheese.", tags:["Goat's Milk","Hard","Aged 2yr","Artisan"] },
  { id:135, name:"Colston Bassett Stilton",  origin:"Nottinghamshire, UK",      type:"blue",  price:29.00, unit:"lb", emoji:"🔵", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Stilton_2.jpg/400px-Stilton_2.jpg",                                                                        rating:4.9, reviews:134, badge:null,  desc:"The finest of all Stiltons — made at Colston Bassett Dairy since 1913. Hand-ladled curds produce a creamier, more buttery result than machine-made Stilton. The benchmark of English blue cheese.", tags:["Cow's Milk","Blue","UK","Artisan"] },
  { id:136, name:"Époisses (Large Wheel)",   origin:"Burgundy, France",         type:"soft",  price:65.00, unit:"ea", emoji:"🟠", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Epoisses_2.jpg/400px-Epoisses_2.jpg",                                                                     rating:4.6, reviews:43,  badge:null,  desc:"The full 500g wheel of France's most notorious cheese. Washed six times in Marc de Bourgogne, developing the signature sticky orange rind. Enough for an entire dinner party of adventurous cheese lovers.", tags:["Cow's Milk","Soft","Washed Rind","AOP"] },
  { id:137, name:"Taleggio Aged 60-Day",     origin:"Lombardy, Italy",          type:"soft",  price:27.00, unit:"lb", emoji:"🟧", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Taleggio_cheese.jpg/400px-Taleggio_cheese.jpg",                                                            rating:4.7, reviews:87,  badge:null,  desc:"Extended-age Taleggio from a single producer in the Val Taleggio — the extra 30 days of cave washing deepens the aroma and intensifies the meaty, savoury interior. Rarer and more complex than standard Taleggio.", tags:["Cow's Milk","Soft","Aged","Italy"] },
  { id:138, name:"Chèvre with Herbes de Provence",origin:"Provence, France",    type:"fresh", price:13.50, unit:"ea", emoji:"🌿", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/FrenchGoatCheese.jpg/400px-FrenchGoatCheese.jpg",                                                          rating:4.7, reviews:145, badge:"New", desc:"Fresh Provençal goat cheese rolled in a fragrant crust of dried thyme, rosemary, oregano and lavender. Every slice is a taste of summer in the south of France.", tags:["Goat's Milk","Fresh","Herbs","France"] },
  { id:139, name:"Brillat-Savarin with Truffles",origin:"Normandy, France",     type:"fresh", price:42.00, unit:"ea", emoji:"🍄", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Brillat-Savarin_cheese.jpg/400px-Brillat-Savarin_cheese.jpg",                                              rating:5.0, reviews:67,  badge:null,  desc:"The most indulgent cheese on our list — triple-cream Brillat-Savarin layered with shaved Périgord black truffles. The truffle aroma and the butter-rich cream create something truly extraordinary.", tags:["Cow's Milk","Fresh","Truffle","Triple Cream"] },
  { id:140, name:"Burrata with Truffle",     origin:"Puglia, Italy",            type:"fresh", price:18.99, unit:"ea", emoji:"🍄", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Fresh_burrata_cheese.jpg/400px-Fresh_burrata_cheese.jpg",                                                   rating:4.9, reviews:98,  badge:"New", desc:"Hand-made burrata filled with truffle-infused stracciatella — the heady truffle perfume blooms through the rich cream filling. Serve simply with good olive oil and flaky sea salt.", tags:["Cow's Milk","Fresh","Truffle","Italy"] },
  { id:141, name:"Cave-Aged Gruyère (18mo)", origin:"Fribourg, Switzerland",    type:"aged",  price:34.00, unit:"lb", emoji:"🟨", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Gruy%C3%A8re.jpg/400px-Gruy%C3%A8re.jpg",                                                                  rating:4.9, reviews:112, badge:null,  desc:"Extra-aged cave Gruyère — 18 months of development in the famous Gruyères caves produces a firmer, crunchier and far more complex cheese than standard Gruyère. Exceptional fruit, nut and alpine herb notes.", tags:["Cow's Milk","Hard","Aged 18mo","Switzerland"] },
  { id:142, name:"Parmigiano 24-Month Wheel Piece",origin:"Emilia-Romagna, Italy",type:"aged",price:31.00, unit:"lb", emoji:"🧀", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Parmigiano_reggiano.jpg/400px-Parmigiano_reggiano.jpg",                                                    rating:4.9, reviews:289, badge:null,  desc:"A freshly cracked piece from a 24-month DOP wheel — the most authentic way to buy Parmigiano. Granular, nutty, complex and laced with protein crystals. Eat as is, or grate over everything.", tags:["Cow's Milk","Hard","Aged 24mo","Italy"] },
  { id:143, name:"Mature Comté (24mo)",      origin:"Franche-Comté, France",    type:"aged",  price:38.00, unit:"lb", emoji:"🟤", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Comte_Cheese.jpg/400px-Comte_Cheese.jpg",                                                                  rating:4.9, reviews:98,  badge:null,  desc:"24-month aged Comté from a single mountain cave — complex as a fine wine. Deep fruit, toasted nut and long savoury finish. One of the most complex cheeses in the world at its peak.", tags:["Cow's Milk","Hard","Aged 24mo","AOP"] },
  { id:144, name:"Gorgonzola DOP (Wheel Piece)",origin:"Lombardy, Italy",       type:"blue",  price:24.00, unit:"lb", emoji:"🫐", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Gorgonzola_Dolce.jpg/400px-Gorgonzola_Dolce.jpg",                                                          rating:4.7, reviews:145, badge:null,  desc:"A freshly cracked piece from a full Gorgonzola DOP wheel — creamy, boldly veined and at its absolute best. Either Piccante or Dolce available. The most iconic Italian blue.", tags:["Cow's Milk","Blue","Italy","DOP"] },
  { id:145, name:"Kunik",                    origin:"New York, USA",            type:"fresh", price:27.00, unit:"ea", emoji:"🤍", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Brillat-Savarin_cheese.jpg/400px-Brillat-Savarin_cheese.jpg",                                              rating:4.8, reviews:76,  badge:null,  desc:"Nettle Meadow's triple-cream goat-and-cow's-milk marvel from the Adirondacks. Bloomy-rind, impossibly rich, with a tangy goat finish cutting through the cream. One of America's finest soft cheeses.", tags:["Goat's Milk","Fresh","Triple Cream","USA"] },
  { id:146, name:"Époisses Grand Cru",       origin:"Burgundy, France",         type:"soft",  price:28.99, unit:"ea", emoji:"🟠", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Epoisses_2.jpg/400px-Epoisses_2.jpg",                                                                     rating:4.7, reviews:54,  badge:null,  desc:"Premium version of Époisses from the finest Burgundy producer — washed exclusively in the estate's own Marc de Bourgogne. Extra sticky, extra pungent and extra magnificent.", tags:["Cow's Milk","Soft","Burgundy","Washed Rind"] },
  { id:147, name:"Bra Duro DOP",             origin:"Piedmont, Italy",          type:"hard",  price:22.00, unit:"lb", emoji:"🟡", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Pecorino_romano.jpg/400px-Pecorino_romano.jpg",                                                             rating:4.5, reviews:87,  badge:null,  desc:"Ancient Piedmontese cheese from the town of Bra — firm and compact with a tangy, savoury bite. One of Italy's most historic cheeses, loved by local shepherds for centuries.", tags:["Cow's Milk","Hard","Piedmont","DOP"] },
  { id:148, name:"Raclette (Smoked)",        origin:"Valais, Switzerland",      type:"soft",  price:29.50, unit:"lb", emoji:"💨", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Raclette.jpg/400px-Raclette.jpg",                                                                          rating:4.7, reviews:112, badge:null,  desc:"Cold-smoked Raclette — all the melting magic of classic Raclette with an added layer of gentle smokiness. Extraordinary scraped over potatoes or melted on an open fire.", tags:["Cow's Milk","Soft","Smoked","Switzerland"] },
  { id:149, name:"Feta with Herbs & Chilli", origin:"Thessaly, Greece",         type:"fresh", price:16.99, unit:"lb", emoji:"🌶️", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Feta_Cheese.jpg/400px-Feta_Cheese.jpg",                                                                   rating:4.6, reviews:167, badge:"New", desc:"Authentic Greek PDO feta marinated in olive oil with dried chilli flakes, oregano and bay leaves. The oil takes on the flavour of the cheese — pour both over bread and salads.", tags:["Sheep's Milk","Fresh","Greece","Marinated"] },
  { id:150, name:"Pecorino di Fossa",        origin:"Emilia-Romagna, Italy",    type:"aged",  price:39.00, unit:"lb", emoji:"🕳",  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Pecorino_romano.jpg/400px-Pecorino_romano.jpg",                                                             rating:4.8, reviews:65,  badge:null,  desc:"'Pit cheese' — buried in tufa rock pits in Sogliano al Rubicone every August and dug up on St. Catherine's Day (Nov 25). The anaerobic aging creates an intensely concentrated, complex flavour unlike any other.", tags:["Sheep's Milk","Hard","Aged","Italy"] },
  { id:151, name:"Reblochon Fermier",        origin:"Haute-Savoie, France",     type:"soft",  price:29.00, unit:"ea", emoji:"🍂", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Reblochon_du_grand_Bornand.jpg/400px-Reblochon_du_grand_Bornand.jpg",                                      rating:4.8, reviews:78,  badge:null,  desc:"True farmhouse (Fermier) Reblochon — distinguishable by its green casein label vs. the red label of creamery versions. Made on the farm with raw milk. Superior depth and complexity.", tags:["Cow's Milk","Soft","Alpine","Raw Milk"] },
  { id:152, name:"Vacherin Fribourgeois AOP",origin:"Fribourg, Switzerland",    type:"soft",  price:24.50, unit:"lb", emoji:"🧀", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Gruy%C3%A8re.jpg/400px-Gruy%C3%A8re.jpg",                                                                  rating:4.7, reviews:89,  badge:null,  desc:"Semi-soft Swiss cheese essential in the classic moitié-moitié (half and half) fondue with Gruyère. Supple, milky and slightly nutty with a thin washed rind. A true fondue cheese.", tags:["Cow's Milk","Soft","Switzerland","AOP"] },
  { id:153, name:"Queijo Serra da Estrela Cured",origin:"Beira Alta, Portugal", type:"hard",  price:34.00, unit:"lb", emoji:"⛰️", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Serra_da_estrela.jpg/400px-Serra_da_estrela.jpg",                                                          rating:4.8, reviews:43,  badge:null,  desc:"The cured version of Portugal's greatest cheese — Serra da Estrela aged until firm. Still made with wild thistle rennet but with a denser texture and intensified sheepy, herbal flavour.", tags:["Sheep's Milk","Hard","Portugal","DOP"] },
  { id:154, name:"Puzzone di Moena",         origin:"Trentino, Italy",          type:"soft",  price:25.00, unit:"ea", emoji:"😤", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Epoisses_2.jpg/400px-Epoisses_2.jpg",                                                                      rating:4.5, reviews:67,  badge:null,  desc:"Its name literally means 'big stinker from Moena' — this Trentino washed-rind cheese more than lives up to it. Pungent rind, gooey interior, and a surprisingly gentle flavour that rewards the brave.", tags:["Cow's Milk","Soft","Trentino","Washed Rind"] },
  { id:155, name:"Soumaintrain AOP",         origin:"Burgundy, France",         type:"soft",  price:20.50, unit:"ea", emoji:"🟠", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Epoisses_2.jpg/400px-Epoisses_2.jpg",                                                                      rating:4.5, reviews:76,  badge:null,  desc:"Burgundy's lesser-known washed-rind — similar to Époisses but milder and less pungent. Washed in brine and Marc de Bourgogne, developing a sticky orange rind and a creamy, yielding interior.", tags:["Cow's Milk","Soft","Burgundy","AOP"] },
  { id:156, name:"Ubriaco al Prosecco",      origin:"Veneto, Italy",            type:"hard",  price:32.00, unit:"lb", emoji:"🍾", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Provolone.jpg/400px-Provolone.jpg",                                                                         rating:4.8, reviews:89,  badge:"New", desc:"'Drunken cheese' — semi-hard Veneto cheese soaked in Prosecco wine during the aging process. The grape-must absorbed into the rind creates a sweet, fruity edge to the nutty cheese.", tags:["Cow's Milk","Hard","Wine-Washed","Italy"] },
  { id:157, name:"Ubriaco al Amarone",       origin:"Veneto, Italy",            type:"hard",  price:38.00, unit:"lb", emoji:"🍷", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Provolone.jpg/400px-Provolone.jpg",                                                                         rating:4.9, reviews:67,  badge:"New", desc:"Soaked for 6 months in Amarone grape marc — the king of Italian red wines meets the king of aging techniques. Deep red-purple rind, complex fruit and wine notes absorbed throughout the paste.", tags:["Cow's Milk","Hard","Wine-Washed","Italy"] },
  { id:158, name:"Picodon AOP",              origin:"Drôme, France",            type:"fresh", price:8.50,  unit:"ea", emoji:"🐐", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/FrenchGoatCheese.jpg/400px-FrenchGoatCheese.jpg",                                                          rating:4.5, reviews:87,  badge:null,  desc:"Small Ardèche goat cheese disc with a delicate, wrinkled rind. Mild and milky when young, it can be left to age until it becomes hard and fiercely pungent — a completely different cheese.", tags:["Goat's Milk","Fresh","Ardèche","AOP"] },
  { id:159, name:"Pélardon AOP",             origin:"Languedoc, France",        type:"fresh", price:8.99,  unit:"ea", emoji:"🐐", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/FrenchGoatCheese.jpg/400px-FrenchGoatCheese.jpg",                                                          rating:4.5, reviews:76,  badge:null,  desc:"Tiny Languedoc goat cheese — one of France's smallest AOP cheeses. Mild and sweet when fresh, it develops complexity as it dries. Made by small family producers in the garrigue scrubland.", tags:["Goat's Milk","Fresh","Languedoc","AOP"] },
  { id:160, name:"Affineurs Cave Selection", origin:"Various, Europe",          type:"aged",  price:45.00, unit:"ea", emoji:"🏆", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Parmigiano_reggiano.jpg/400px-Parmigiano_reggiano.jpg",                                                    rating:5.0, reviews:34,  badge:"New", desc:"A hand-selected 250g piece chosen by our master affineur from whatever is at absolute peak condition in our cave this week. Could be anything — Comté, aged Gouda, Gruyère. Always extraordinary.", tags:["Mixed","Aged","Affineur-Selected","Rare"] },
  { id:161, name:"Brie Noir",                origin:"Seine-et-Marne, France",   type:"aged",  price:28.00, unit:"ea", emoji:"⬛", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Brie_de_Meaux_Rouzaire.jpg/400px-Brie_de_Meaux_Rouzaire.jpg",                                              rating:4.7, reviews:54,  badge:null,  desc:"Black Brie — the rarest and most extreme form of Brie, aged for a full year until the rind turns dark grey-black and the interior condenses into a caramel-intense, chewy paste. Only made by a handful of farms.", tags:["Cow's Milk","Aged","Rare","France"] },
  { id:162, name:"Australian Pyengana Cheddar",origin:"Tasmania, Australia",    type:"aged",  price:26.00, unit:"lb", emoji:"🦘", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Cheddar_Cheese_%28local%29.jpg/400px-Cheddar_Cheese_%28local%29.jpg",                                     rating:4.7, reviews:78,  badge:null,  desc:"Tasmania's legendary cloth-bound farmhouse cheddar — made at Pyengana since 1901. Firm, sharp and earthy with a long lingering finish. Proof that great cheddar is not just a British affair.", tags:["Cow's Milk","Hard","Australia","Farmhouse"] },
];

const DEALS = [
  { id: 1, cheeseId: 9,  discount: 35, label: "Deal of the Week",   extraDesc: "Limited stock — only 12 lbs left!" },
  { id: 2, cheeseId: 1,  discount: 20, label: "Flash Sale",          extraDesc: "Import savings passed to you!" },
  { id: 3, cheeseId: 5,  discount: 25, label: "Weekend Special",     extraDesc: "Free shipping on orders over $60!" },
  { id: 4, cheeseId: 6,  discount: 15, label: "Fresh Pick",          extraDesc: "Order by Thursday for weekend delivery" },
];

const TRADES = [
  { id: 1, user: "CheeseHunter_Dave",   have: "2 lbs Aged Manchego",       want: "Stilton or Roquefort",   location: "Portland, OR",   posted: "2 hours ago" },
  { id: 2, user: "FarmFresh_Emily",     have: "1 wheel local Gouda (~3lb)", want: "French Brie or Camembert",location: "Madison, WI",    posted: "5 hours ago" },
  { id: 3, user: "ArtisanAl",           have: "Homemade Ricotta (2 lbs)",   want: "Any aged hard cheese",   location: "Brooklyn, NY",   posted: "Yesterday" },
  { id: 4, user: "TheCurdNerd",         have: "Extra-aged Cheddar 1.5lb",   want: "Époisses or washed rind",location: "Austin, TX",     posted: "Yesterday" },
  { id: 5, user: "Queso_Queen",         have: "Queso Fresco 3 lbs",         want: "European blue cheese",   location: "San Diego, CA",  posted: "2 days ago" },
  { id: 6, user: "AlpineCheeseLover",   have: "Gruyère wedge 1.5 lbs",      want: "UK cheese — Stilton, Red Leicester, Wensleydale", location: "Denver, CO", posted: "2 days ago" },
];

const COUPONS = [
  { value: "15%", off: "OFF", code: "BIGCHEESE15", title: "New Customer Discount",   desc: "15% off your first order — no minimum spend.",                expires: "May 31, 2026" },
  { value: "$10", off: "OFF", code: "WHEELS10",    title: "$10 Off Orders Over $75", desc: "Save $10 when you spend $75 or more on any cheese.",         expires: "May 15, 2026" },
  { value: "20%", off: "OFF", code: "BLUELOVERS",  title: "Blue Cheese Sale",        desc: "20% off all blue cheeses — Stilton, Roquefort, Gorgonzola.", expires: "May 10, 2026" },
  { value: "Free", off: "SHIP", code: "FREESHIP60", title: "Free Shipping",          desc: "Free cold-chain shipping on all orders over $60.",           expires: "Ongoing" },
  { value: "25%", off: "OFF", code: "AGED25",      title: "Aged Cheese Special",     desc: "25% off all cheeses aged 12 months or longer.",              expires: "May 20, 2026" },
  { value: "$5",  off: "OFF", code: "TRYBRIE5",    title: "Soft Cheese Sampler",     desc: "$5 off when you buy any two soft cheeses together.",         expires: "May 25, 2026" },
];

// ===================== CART STATE =====================
let cart = [];
let currentQty = 1;
let currentProductId = null;
let activeFilter = 'all';
let searchQuery = '';
let freeCheeseActive = false;

// ===================== RENDER PRODUCTS =====================
function imgTag(c, height = '180px') {
  return `<img src="${c.img}" alt="${c.name}" style="width:100%;height:${height};object-fit:cover;display:block;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><span style="display:none;font-size:4rem;width:100%;height:${height};align-items:center;justify-content:center;background:linear-gradient(135deg,var(--gold-light),var(--cream-dark))">${c.emoji}</span>`;
}

function renderProducts(list) {
  const grid = document.getElementById('product-grid');
  if (!list.length) {
    grid.innerHTML = '<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:3rem 0;">No cheeses found. Try a different search or filter.</p>';
    return;
  }
  grid.innerHTML = list.map(c => `
    <div class="product-card" onclick="openProduct(${c.id})">
      <div class="product-image" style="padding:0;overflow:hidden;">
        ${imgTag(c)}
        ${c.badge ? `<div class="product-badge badge-new">${c.badge}</div>` : ''}
      </div>
      <div class="product-info">
        <div class="product-name">${c.name}</div>
        <div class="product-origin">📍 ${c.origin}</div>
        <div class="product-rating">${starRating(c.rating)} <small style="color:var(--text-muted)">(${c.reviews})</small></div>
        <div class="product-footer">
          <div class="product-price">$${c.price.toFixed(2)} <small>/ ${c.unit}</small></div>
          <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${c.id})">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

function starRating(r) {
  const full = Math.floor(r);
  const half = r % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + ' ' + r.toFixed(1);
}

function getFilteredList() {
  return CHEESES.filter(c => {
    const matchType = activeFilter === 'all' || c.type === activeFilter;
    const matchSearch = !searchQuery || c.name.toLowerCase().includes(searchQuery) || c.origin.toLowerCase().includes(searchQuery);
    return matchType && matchSearch;
  });
}

function filterCheese(type, btn) {
  activeFilter = type;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(getFilteredList());
}

function searchCheese(val) {
  searchQuery = val.toLowerCase();
  renderProducts(getFilteredList());
}

// ===================== PRODUCT MODAL =====================
function openProduct(id) {
  currentProductId = id;
  currentQty = 1;
  const c = CHEESES.find(x => x.id === id);
  if (!c) return;

  document.getElementById('product-modal-content').innerHTML = `
    <div class="product-modal-inner">
      <div class="product-modal-img" style="padding:0;overflow:hidden;">${imgTag(c, '200px')}</div>
      <div class="product-modal-details">
        <h2>${c.name}</h2>
        <div class="origin">📍 ${c.origin}</div>
        <div class="rating">${starRating(c.rating)} <span style="color:var(--text-muted);font-size:.88rem">(${c.reviews} reviews)</span></div>
        <div class="desc">${c.desc}</div>
        <div class="tags">${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="price-big">$${c.price.toFixed(2)} <small style="font-size:1rem;font-weight:400;color:var(--text-muted)">/ ${c.unit}</small></div>
        <div class="qty-row">
          <button class="qty-btn" onclick="changeQty(-1)">−</button>
          <span class="qty-display" id="modal-qty">${currentQty}</span>
          <button class="qty-btn" onclick="changeQty(1)">+</button>
          <span style="font-size:.88rem;color:var(--text-muted)">${c.unit}s</span>
        </div>
        <button class="btn-primary btn-large" style="width:100%" onclick="addToCartModal(${c.id})">Add to Cart 🛒</button>
      </div>
    </div>
    ${renderReviews(c.id)}
  `;
  showModal('product-modal');
}

function changeQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  const el = document.getElementById('modal-qty');
  if (el) el.textContent = currentQty;
}

function addToCartModal(id) {
  for (let i = 0; i < currentQty; i++) addToCart(id, true);
  closeModal('product-modal');
  toast(`Added ${currentQty} × ${CHEESES.find(c=>c.id===id).name} to cart`);
}

// ===================== CART =====================
function addToCart(id, silent = false) {
  const cheese = CHEESES.find(c => c.id === id);
  if (!cheese) return;
  const existing = cart.find(i => i.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({ ...cheese, qty: 1 }); }
  updateCartUI();
  if (!silent) toast(`${cheese.emoji} ${cheese.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cart-count').textContent = count;

  const container = document.getElementById('cart-items');
  const footer = document.getElementById('cart-footer');

  if (!cart.length) {
    container.innerHTML = '<p class="empty-cart">Your cart is empty. Add some cheese!</p>';
    footer.style.display = 'none';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">
          ${freeCheeseActive
            ? `<span style="text-decoration:line-through;color:var(--text-muted)">$${(item.price * item.qty).toFixed(2)}</span> <strong style="color:var(--green)">FREE 🎉</strong>`
            : `$${item.price.toFixed(2)} × ${item.qty} = $${(item.price * item.qty).toFixed(2)}`
          }
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">🗑</button>
    </div>
  `).join('');

  const rawTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const total = freeCheeseActive ? 0 : rawTotal;
  const totalEl = document.getElementById('cart-total');
  if (freeCheeseActive) {
    totalEl.innerHTML = `<span style="text-decoration:line-through;color:var(--text-muted);font-weight:400">$${rawTotal.toFixed(2)}</span> <span style="color:var(--green)">$0.00 🎉</span>`;
  } else {
    totalEl.textContent = `$${total.toFixed(2)}`;
  }
  footer.style.display = 'flex';
}

function toggleCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}

function applyCoupon() {
  const input = document.getElementById('coupon-input');
  const code = input.value.trim().toUpperCase();
  if (code === 'CHEESYFREE') {
    freeCheeseActive = true;
    input.style.borderColor = 'var(--green)';
    input.value = 'CHEESYFREE ✓';
    updateCartUI();
    toast('🧀🎉 ALL CHEESE IS NOW FREE! You beautiful human.');
    return;
  }
  const valid = COUPONS.map(c => c.code);
  if (valid.includes(code)) {
    toast(`✅ Coupon ${code} applied! Discount reflected at checkout.`);
    input.style.borderColor = 'var(--green)';
  } else {
    toast(`❌ Invalid coupon code. Check the Coupons section!`);
    input.style.borderColor = 'var(--red)';
  }
}

// ===================== RENDER TRADES =====================
function renderTrades() {
  document.getElementById('trade-grid').innerHTML = TRADES.map(t => `
    <div class="trade-card">
      <h4>🔄 Trade Offer</h4>
      <div class="trade-have"><strong>Have:</strong> ${t.have}</div>
      <div class="trade-want"><strong>Want:</strong> ${t.want}</div>
      <div class="trade-meta">
        <span>👤 ${t.user} · 📍 ${t.location}</span>
        <button class="btn-gold" onclick="contactTrader('${t.user}')">Contact</button>
      </div>
      <div style="font-size:.78rem;color:var(--text-muted);margin-top:.5rem">Posted: ${t.posted}</div>
    </div>
  `).join('');
}

function contactTrader(user) {
  toast(`Message sent to ${user}! They'll be notified.`);
}

// ===================== RENDER DEALS =====================
function renderDeals() {
  document.getElementById('deals-grid').innerHTML = DEALS.map(d => {
    const c = CHEESES.find(x => x.id === d.cheeseId);
    const discounted = c.price * (1 - d.discount / 100);
    return `
      <div class="deal-card">
        <div class="deal-image" style="padding:0;overflow:hidden;position:relative;">
          ${imgTag(c, '160px')}
          <div class="deal-discount">-${d.discount}%</div>
        </div>
        <div class="deal-info">
          <div class="deal-name">${c.name}</div>
          <div class="deal-desc">${d.label} — ${d.extraDesc}</div>
          <div class="deal-prices">
            <span class="deal-price-new">$${discounted.toFixed(2)}</span>
            <span class="deal-price-old">$${c.price.toFixed(2)}</span>
            <span style="font-size:.82rem;color:var(--text-muted)">/ ${c.unit}</span>
          </div>
          <button class="btn-primary" style="width:100%" onclick="addDealToCart(${c.id}, ${discounted.toFixed(2)})">Add Deal to Cart 🛒</button>
        </div>
      </div>
    `;
  }).join('');
}

function addDealToCart(id, salePrice) {
  const cheese = CHEESES.find(c => c.id === id);
  const existing = cart.find(i => i.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({ ...cheese, price: salePrice, qty: 1 }); }
  updateCartUI();
  toast(`🔥 Deal added: ${cheese.name} at sale price!`);
}

// ===================== RENDER COUPONS =====================
function renderCoupons() {
  document.getElementById('coupon-grid').innerHTML = COUPONS.map(c => `
    <div class="coupon-card">
      <div class="coupon-left">
        <div class="coupon-value">${c.value}</div>
        <div class="coupon-off">${c.off}</div>
      </div>
      <div class="coupon-right">
        <div class="coupon-title">${c.title}</div>
        <div class="coupon-desc">${c.desc}</div>
        <div class="coupon-code-row">
          <span class="coupon-code">${c.code}</span>
          <button class="copy-btn" onclick="copyCode('${c.code}', this)">Copy</button>
        </div>
        <div class="coupon-expires">Expires: ${c.expires}</div>
      </div>
    </div>
  `).join('');
}

function copyCode(code, btn) {
  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = 'Copied!';
    btn.style.color = 'var(--green)';
    setTimeout(() => { btn.textContent = 'Copy'; btn.style.color = ''; }, 2000);
    toast(`Coupon code ${code} copied to clipboard!`);
  });
}

// ===================== COUNTDOWN TIMER =====================
function updateCountdown() {
  const now = new Date();
  // Next Monday midnight
  const nextMonday = new Date(now);
  const day = now.getDay();
  const daysUntilMonday = day === 0 ? 1 : 8 - day;
  nextMonday.setDate(now.getDate() + daysUntilMonday);
  nextMonday.setHours(0, 0, 0, 0);

  const diff = nextMonday - now;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  document.getElementById('countdown').innerHTML =
    `⏱ Deals reset in: <b>${d}d</b> ${h}h ${m}m ${s}s`;
}

// ===================== SELL FORM =====================
function submitListing() {
  const name = document.getElementById('sell-name').value.trim();
  const price = document.getElementById('sell-price').value;
  const condition = document.getElementById('sell-condition').value;
  if (!name || !price) { toast('Please fill in the cheese name and price.'); return; }
  toast(`✅ Listing preview created for "${name}"! Sign in to publish.`);
  showModal('sell-modal');
}

// ===================== TRADE FORM =====================
function submitTrade() {
  toast('✅ Trade offer posted! Cheese swappers will contact you soon.');
  closeModal('trade-modal');
  // Prepend a new trade card (demo only)
  const fakeCard = document.createElement('div');
  fakeCard.className = 'trade-card';
  fakeCard.innerHTML = `
    <h4>🔄 Trade Offer <span style="color:var(--green);font-size:.8rem">(Just Posted)</span></h4>
    <div class="trade-have"><strong>Have:</strong> Your listing</div>
    <div class="trade-want"><strong>Want:</strong> Great cheese in return</div>
    <div class="trade-meta"><span>👤 You · 📍 Your Location</span></div>
    <div style="font-size:.78rem;color:var(--text-muted);margin-top:.5rem">Posted: Just now</div>
  `;
  document.getElementById('trade-grid').prepend(fakeCard);
}

// ===================== CHECKOUT =====================
function placeOrder() {
  const wasFree = freeCheeseActive;
  cart = [];
  freeCheeseActive = false;
  updateCartUI();
  closeModal('checkout-modal');
  toast(wasFree ? '🧀🎉 FREE cheese order placed! Enjoy every single bite!' : '🎉 Order placed! Your cheese is on its way!');
}

// ===================== NEWSLETTER =====================
function subscribeNewsletter(e) {
  e.preventDefault();
  toast('🧀 Welcome to the Big Cheese club! Check your inbox.');
  e.target.reset();
}

// ===================== MODALS =====================
function showModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e, id) {
  if (e.target === document.getElementById(id)) closeModal(id);
}

// ===================== MOBILE MENU =====================
function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

// ===================== TOAST =====================
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 3000);
}

// ===================== RAFFLES =====================
const RAFFLES = [
  { id:1, prize:"Full 5 lb Parmigiano-Reggiano Wheel", emoji:"🧀", ticketPrice:4.99, totalTickets:500, soldTickets:342, endsIn:3,  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Parmigiano_reggiano.jpg/400px-Parmigiano_reggiano.jpg" },
  { id:2, prize:"Cheese of the Month — 3-Box Gift Set", emoji:"📦", ticketPrice:2.99, totalTickets:300, soldTickets:187, endsIn:5,  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Brie_de_Meaux_Rouzaire.jpg/400px-Brie_de_Meaux_Rouzaire.jpg" },
  { id:3, prize:"Full Cave Roquefort Wheel (4 lb)",     emoji:"💙", ticketPrice:6.99, totalTickets:200, soldTickets:98,  endsIn:1,  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/RoquefortFR.jpg/400px-RoquefortFR.jpg" },
  { id:4, prize:"Artisan Board + 6-Cheese Luxury Bundle",emoji:"🪵",ticketPrice:3.99, totalTickets:400, soldTickets:256, endsIn:7,  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Goudacheese.jpg/400px-Goudacheese.jpg" },
  { id:5, prize:"Grand Fromage Box — $500 Value",       emoji:"👑", ticketPrice:9.99, totalTickets:150, soldTickets:67,  endsIn:14, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Parmigiano_reggiano.jpg/400px-Parmigiano_reggiano.jpg" },
];

const RAFFLE_WINNERS = [
  { name:"Sarah M.", location:"Portland, OR", prize:"Aged Gouda Wheel (3 lb)",     date:"May 12, 2026" },
  { name:"James T.", location:"Austin, TX",   prize:"Cheese of the Month — 6 mo",  date:"May 5, 2026"  },
  { name:"Lucia R.", location:"Brooklyn, NY", prize:"Stilton PDO 2 lb",            date:"Apr 28, 2026" },
  { name:"Dave K.",  location:"Denver, CO",   prize:"Brie de Meaux + Champagne",   date:"Apr 21, 2026" },
  { name:"Priya S.", location:"Chicago, IL",  prize:"Parmigiano 5 lb Wheel",       date:"Apr 14, 2026" },
  { name:"Tom W.",   location:"Seattle, WA",  prize:"Gorgonzola Dolce Gift Set",   date:"Apr 7, 2026"  },
];

let raffleEntries = {};

function renderRaffles() {
  document.getElementById('raffle-grid').innerHTML = RAFFLES.map(r => {
    const pct = Math.round((r.soldTickets / r.totalTickets) * 100);
    const remaining = r.totalTickets - r.soldTickets;
    const urgent = r.endsIn <= 1;
    return `
      <div class="raffle-card">
        <div class="raffle-image">
          <img src="${r.img}" alt="${r.prize}" onerror="this.style.display='none'" style="width:100%;height:160px;object-fit:cover;display:block;" />
          <div class="raffle-overlay-emoji">${r.emoji}</div>
          <div class="raffle-timer ${urgent ? 'raffle-urgent' : ''}">⏰ ${r.endsIn === 1 ? 'Ends TONIGHT' : r.endsIn + 'd left'}</div>
        </div>
        <div class="raffle-info">
          <h4>${r.prize}</h4>
          <div class="raffle-progress-wrap">
            <div class="raffle-progress-bar" style="width:${pct}%"></div>
          </div>
          <div class="raffle-meta">${r.soldTickets} of ${r.totalTickets} tickets sold · <strong>${remaining} remaining</strong></div>
          <div class="raffle-footer">
            <div class="raffle-price">$${r.ticketPrice.toFixed(2)}/ticket</div>
            <div class="raffle-qty-row">
              <button class="qty-btn" onclick="changeRaffleQty(${r.id},-1)">−</button>
              <span id="rqty-${r.id}" class="qty-display">1</span>
              <button class="qty-btn" onclick="changeRaffleQty(${r.id},1)">+</button>
            </div>
            <button class="btn-primary" onclick="enterRaffle(${r.id})">Enter 🎰</button>
          </div>
          ${raffleEntries[r.id] ? `<div class="raffle-entered">✅ You have ${raffleEntries[r.id]} ticket${raffleEntries[r.id]>1?'s':''} entered</div>` : ''}
        </div>
      </div>`;
  }).join('');

  document.getElementById('winners-grid').innerHTML = RAFFLE_WINNERS.map(w => `
    <div class="winner-card">
      <div class="winner-trophy">🏆</div>
      <div>
        <div class="winner-name">${w.name} <span class="winner-loc">· ${w.location}</span></div>
        <div class="winner-prize">${w.prize}</div>
        <div class="winner-date">${w.date}</div>
      </div>
    </div>`).join('');
}

function changeRaffleQty(id, delta) {
  const el = document.getElementById(`rqty-${id}`);
  if (el) el.textContent = Math.max(1, Math.min(20, parseInt(el.textContent) + delta));
}

function enterRaffle(id) {
  const r = RAFFLES.find(x => x.id === id);
  const qty = parseInt(document.getElementById(`rqty-${id}`).textContent);
  const total = (r.ticketPrice * qty).toFixed(2);
  raffleEntries[id] = (raffleEntries[id] || 0) + qty;
  r.soldTickets = Math.min(r.totalTickets, r.soldTickets + qty);
  toast(`🎰 ${qty} ticket${qty>1?'s':''} entered for "${r.prize}" — $${total} charged. Good luck!`);
  renderRaffles();
}

// ===================== REVIEWS =====================
const REVIEWS = {
  1: [
    { name:"Marco T.",       stars:5, body:"Absolutely spectacular. The crystals practically crunch!" },
    { name:"Sara L.",        stars:5, body:"Best Parm I've ever had outside of Italy." },
    { name:"GaryFromOhio",   stars:1, body:"Tasted like someone left a sock in a cave for 2 years. Will not be purchasing again. My dog also refused it." },
    { name:"Disappointed_Dave", stars:1, body:"I asked for cheese. This looks like a rock someone found on a hiking trail. One star." },
  ],
  2: [
    { name:"Julie M.",       stars:4, body:"Incredibly creamy. Perfect with a glass of Champagne." },
    { name:"BrieBadReview",  stars:1, body:"Smells like feet. Expensive feet. I paid $20 for something that made my entire fridge smell like a gym locker. NEVER AGAIN." },
    { name:"Todd B.",        stars:1, body:"My wife left me after I brought this home. Coincidence? I think not. One star." },
  ],
  3: [
    { name:"Bob K.",         stars:5, body:"Sharp, complex, and deeply satisfying. My go-to cheddar." },
    { name:"Tina R.",        stars:4, body:"Great for grilled cheese too — melts beautifully." },
    { name:"CheddarHater99", stars:1, body:"Just orange. Everything about it is just orange. I wanted CHEESE not a construction cone. Returned immediately." },
    { name:"Vermont Refugee",stars:1, body:"I drove to Vermont specifically to tell them their cheese is bad. Worth the trip. One star." },
  ],
  4: [
    { name:"Henri D.",       stars:5, body:"The real deal. Cave-aged and absolutely pungent in the best way." },
    { name:"KarenW",         stars:1, body:"I opened the package and my smoke alarm went off. This is not a cheese. This is a biological hazard. I am calling my congressman." },
    { name:"Mike S.",        stars:1, body:"Ordered this for a dinner party. Lost three friends. The fourth is still not speaking to me. This cheese ended my social life." },
  ],
  5: [
    { name:"Carmen S.",      stars:5, body:"Authentic DOP. Pairs perfectly with quince jelly." },
    { name:"AmericaFirst",   stars:1, body:"Spanish cheese?? In MY pantry?? One star. Also too expensive for what is essentially a fancy rubber eraser." },
    { name:"PamelaBB",       stars:1, body:"The texture reminded me of a pencil eraser and the taste reminded me of a sad afternoon. Would not recommend." },
  ],
  6: [
    { name:"Lucia B.",       stars:5, body:"Creamy, fresh, heavenly. We finished it in one sitting." },
    { name:"James W.",       stars:5, body:"Same-day fresh — you can taste the difference." },
    { name:"BurrataBob",     stars:1, body:"Looked like a ghost. Tasted like air. I paid $13 for what is essentially a bag of warm milk. My toddler cried when she tasted it and honestly same." },
    { name:"Phil T.",        stars:1, body:"Opened the package and it just… collapsed. Like my hopes and dreams. One star." },
  ],
  7: [
    { name:"Pierre G.",      stars:4, body:"Not for the faint-hearted, but absolutely magnificent." },
    { name:"NasalRegrets",   stars:1, body:"I thought a small animal had died in my mailbox. Nope. Just this cheese. My neighbours have filed a noise complaint about the smell. Is that possible? One star." },
    { name:"SherylFromTucson",stars:1, body:"My husband thought I hadn't showered for a week. I had. It was this cheese. Divorce proceedings are ongoing." },
  ],
  8: [
    { name:"Oliver P.",      stars:5, body:"Classic Stilton, perfect with a vintage port." },
    { name:"BlueIsBad",      stars:1, body:"There is MOLD on this cheese. I did not pay for mold. I can grow mold at home for free. One star and I am reporting this to the FDA." },
    { name:"GrumpyGrandpa",  stars:1, body:"Looks like someone dropped cheese in a swimming pool and fished it out. My false teeth got stuck. Unacceptable." },
  ],
  9: [
    { name:"Anke V.",        stars:5, body:"The caramel sweetness is unreal. Worth every penny." },
    { name:"Dave S.",        stars:5, body:"Those crunchy crystals are addictive." },
    { name:"WalterB",        stars:1, body:"$34 a pound!! For CHEESE?? I could buy a steak. I could buy TWO steaks. Instead I bought this overpriced orange rock. One star and I'm telling my church group." },
    { name:"CrystalHater",   stars:1, body:"There are hard crunchy bits in this cheese. I assumed it was broken glass and called poison control. They were not amused. One star." },
  ],
  10:[
    { name:"Sophie R.",      stars:4, body:"Light, tangy and perfect on a salad." },
    { name:"GoatSkeptic",    stars:1, body:"Tastes like it was made by a goat. Oh. I see. Still one star. Why does it smell like a petting zoo? I did not sign up for a petting zoo." },
    { name:"DairyDenise",    stars:1, body:"I put this on toast and my toast immediately became worse. That's impressive. Negatively impressive." },
  ],
  11:[
    { name:"Alain B.",       stars:5, body:"Complex and nutty — a cheese lover's cheese." },
    { name:"BasicBarry",     stars:1, body:"Too fancy. Too French. Too much. I just wanted something for my crackers and instead I got a whole personality. One star." },
    { name:"SimonP",         stars:1, body:"My cat walked away from this cheese. My CAT. The animal that eats hair off the shower drain. Think about that." },
  ],
  12:[
    { name:"Gina M.",        stars:4, body:"Bold and crumbly. Incredible in pasta sauces." },
    { name:"MoldManic",      stars:1, body:"Blue cheese is just cheese that gave up on itself. One star. I didn't finish it and neither should you." },
    { name:"AnonymousAndy",  stars:1, body:"Ordered this to impress a date. The date left before dessert. I finished the gorgonzola alone. In the dark. One star." },
  ],
};

let pendingReviewCheese = null;
let selectedStars = 0;

function renderReviews(cheeseId) {
  const list = REVIEWS[cheeseId] || [];
  return `
    <div class="reviews-section">
      <h4>⭐ Customer Reviews (${list.length})</h4>
      <div class="review-list">
        ${list.length ? list.map(r => `
          <div class="review-item">
            <div class="review-header">
              <span class="review-author">${r.name}</span>
              <span class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</span>
            </div>
            <div class="review-body">${r.body}</div>
          </div>
        `).join('') : '<p style="color:var(--text-muted);font-size:.9rem">No reviews yet. Be the first!</p>'}
      </div>
      <button class="btn-outline" onclick="openReviewModal(${cheeseId})">Write a Review</button>
    </div>`;
}

function openReviewModal(cheeseId) {
  pendingReviewCheese = cheeseId;
  selectedStars = 0;
  document.querySelectorAll('#star-picker span').forEach(s => s.classList.remove('lit'));
  document.getElementById('review-name').value = '';
  document.getElementById('review-text').value = '';
  showModal('review-modal');
}

function pickStar(n) {
  selectedStars = n;
  document.querySelectorAll('#star-picker span').forEach((s, i) => {
    s.classList.toggle('lit', i < n);
  });
}

function submitReview() {
  const name = document.getElementById('review-name').value.trim();
  const body = document.getElementById('review-text').value.trim();
  if (!name || !body || !selectedStars) { toast('Please fill in all fields and select a star rating.'); return; }
  if (!REVIEWS[pendingReviewCheese]) REVIEWS[pendingReviewCheese] = [];
  REVIEWS[pendingReviewCheese].unshift({ name, stars: selectedStars, body });
  closeModal('review-modal');
  toast('✅ Review submitted — thank you!');
  openProduct(pendingReviewCheese);
}

// Patch openProduct to include reviews
const _openProductOrig = openProduct;
// Override done inline — we'll inject reviews into the modal content below.

// ===================== BOARD BUILDER =====================
const EXTRAS = [
  { id: 'e1', name: 'Prosciutto di Parma', emoji: '🥩', price: 9.99 },
  { id: 'e2', name: 'Fig Jam',             emoji: '🍯', price: 5.99 },
  { id: 'e3', name: 'Honey',               emoji: '🍯', price: 4.99 },
  { id: 'e4', name: 'Walnuts',             emoji: '🌰', price: 3.99 },
  { id: 'e5', name: 'Sourdough Crackers',  emoji: '🥨', price: 4.49 },
  { id: 'e6', name: 'Cornichons',          emoji: '🥒', price: 3.49 },
  { id: 'e7', name: 'Dried Cranberries',   emoji: '🍒', price: 2.99 },
  { id: 'e8', name: 'Quince Paste',        emoji: '🍑', price: 5.49 },
];

let board = []; // { id, name, emoji, price, type }

function renderBoardPalette() {
  document.getElementById('palette-cheeses').innerHTML = CHEESES.slice(0,8).map(c => `
    <div class="palette-item" onclick="addToBoard('c${c.id}','${c.name.replace(/'/g,"\\'")}','${c.emoji}',${c.price},'cheese')">
      <span class="pi-emoji">${c.emoji}</span>
      <span class="pi-name">${c.name}</span>
      <span class="pi-price">$${c.price.toFixed(2)}</span>
    </div>`).join('');
  document.getElementById('palette-extras').innerHTML = EXTRAS.map(e => `
    <div class="palette-item" onclick="addToBoard('${e.id}','${e.name}','${e.emoji}',${e.price},'extra')">
      <span class="pi-emoji">${e.emoji}</span>
      <span class="pi-name">${e.name}</span>
      <span class="pi-price">$${e.price.toFixed(2)}</span>
    </div>`).join('');
}

function addToBoard(id, name, emoji, price, type) {
  board.push({ id: id + '_' + Date.now(), srcId: id, name, emoji, price, type });
  renderBoard();
  toast(`${emoji} ${name} added to board!`);
}

function removeFromBoard(uid) {
  board = board.filter(b => b.id !== uid);
  renderBoard();
}

function renderBoard() {
  const placeholder = document.getElementById('board-placeholder');
  const items = document.getElementById('board-items');
  const total = board.reduce((s, b) => s + b.price, 0);
  document.getElementById('board-total').textContent = '$' + total.toFixed(2);
  if (!board.length) { placeholder.style.display = 'flex'; items.innerHTML = ''; return; }
  placeholder.style.display = 'none';
  items.innerHTML = board.map(b => `
    <div class="board-chip">
      <span>${b.emoji}</span>
      <span>${b.name}</span>
      <button class="chip-remove" onclick="removeFromBoard('${b.id}')">✕</button>
    </div>`).join('');
}

function clearBoard() {
  board = [];
  renderBoard();
  toast('Board cleared.');
}

function addBoardToCart() {
  if (!board.length) { toast('Add some items to your board first!'); return; }
  board.forEach(b => {
    if (b.type === 'cheese') {
      const id = parseInt(b.srcId.replace('c',''));
      addToCart(id, true);
    } else {
      const existing = cart.find(i => i.id === b.srcId);
      if (existing) existing.qty++;
      else cart.push({ id: b.srcId, name: b.name, emoji: b.emoji, price: b.price, qty: 1 });
    }
  });
  updateCartUI();
  toast(`🪵 Entire board (${board.length} items) added to cart!`);
  clearBoard();
}

// ===================== CHEESE QUIZ =====================
const QUIZ_STEPS = [
  {
    q: "What flavour intensity do you prefer?",
    opts: [
      { emoji:'😌', label:'Mild & Gentle',    sub:'Subtle, crowd-pleasing',  val:'mild' },
      { emoji:'🔥', label:'Bold & Assertive',  sub:'Strong, complex flavours', val:'bold' },
      { emoji:'🌊', label:'Rich & Creamy',     sub:'Luxurious texture',        val:'creamy' },
      { emoji:'🧂', label:'Sharp & Tangy',     sub:'Zingy and bright',         val:'sharp' },
    ]
  },
  {
    q: "What texture do you love?",
    opts: [
      { emoji:'🧈', label:'Soft & Spreadable', sub:'Smooth and silky',        val:'soft' },
      { emoji:'🪨', label:'Firm & Crumbly',    sub:'Dense and satisfying',    val:'hard' },
      { emoji:'💧', label:'Gooey & Melty',     sub:'Perfect for cooking',     val:'gooey' },
      { emoji:'💎', label:'Crystalline',        sub:'Aged with crunchy bits',  val:'crystal' },
    ]
  },
  {
    q: "What's your ideal cheese moment?",
    opts: [
      { emoji:'🍷', label:'Wine Night',        sub:'Paired with a good bottle', val:'wine' },
      { emoji:'🍽️', label:'Cooking & Recipes', sub:'Melted in pasta or pizza',  val:'cook' },
      { emoji:'🪵', label:'Cheese Board',      sub:'Shared with friends',       val:'board' },
      { emoji:'🥗', label:'Salads & Snacks',   sub:'Light everyday eating',     val:'snack' },
    ]
  },
];

const QUIZ_RECS = {
  'mild-soft':    [2, 6],   // Brie, Burrata
  'mild-hard':    [5, 11],  // Manchego, Comté
  'mild-gooey':   [6, 10],  // Burrata, Chèvre
  'mild-crystal': [1, 11],  // Parm, Comté
  'bold-soft':    [7, 4],   // Époisses, Roquefort
  'bold-hard':    [3, 9],   // Cheddar, Gouda
  'bold-gooey':   [7, 12],  // Époisses, Gorgonzola
  'bold-crystal': [1, 9],   // Parm, Gouda
  'creamy-soft':  [2, 6],   // Brie, Burrata
  'creamy-hard':  [11, 5],  // Comté, Manchego
  'creamy-gooey': [6, 2],   // Burrata, Brie
  'creamy-crystal':[9, 1],  // Gouda, Parm
  'sharp-soft':   [7, 10],  // Époisses, Chèvre
  'sharp-hard':   [3, 5],   // Cheddar, Manchego
  'sharp-gooey':  [12, 4],  // Gorgonzola, Roquefort
  'sharp-crystal':[4, 8],   // Roquefort, Stilton
};

let quizAnswers = [];

function startQuiz() {
  quizAnswers = [];
  renderQuizStep(0);
  showModal('quiz-modal');
}

function renderQuizStep(stepIdx) {
  if (stepIdx >= QUIZ_STEPS.length) { showQuizResult(); return; }
  const step = QUIZ_STEPS[stepIdx];
  const progress = QUIZ_STEPS.map((_, i) => `<div class="quiz-dot ${i < stepIdx ? 'done' : ''}"></div>`).join('');
  document.getElementById('quiz-content').innerHTML = `
    <div class="quiz-step">
      <div class="quiz-progress">${progress}</div>
      <h2>${step.q}</h2>
      <p>Step ${stepIdx + 1} of ${QUIZ_STEPS.length}</p>
      <div class="quiz-options">
        ${step.opts.map(o => `
          <button class="quiz-option" onclick="quizAnswer('${o.val}', ${stepIdx + 1})">
            <span class="qo-emoji">${o.emoji}</span>
            <span class="qo-label">${o.label}</span>
            <span class="qo-sub">${o.sub}</span>
          </button>`).join('')}
      </div>
    </div>`;
}

function quizAnswer(val, nextStep) {
  quizAnswers.push(val);
  renderQuizStep(nextStep);
}

function showQuizResult() {
  const key = quizAnswers[0] + '-' + quizAnswers[1];
  const ids = QUIZ_RECS[key] || [1, 2];
  const picks = ids.map(id => CHEESES.find(c => c.id === id)).filter(Boolean);
  const main = picks[0];
  const alt = picks[1];
  document.getElementById('quiz-content').innerHTML = `
    <div class="quiz-result">
      <div class="quiz-progress">${QUIZ_STEPS.map(() => '<div class="quiz-dot done"></div>').join('')}</div>
      <div style="font-size:.85rem;color:var(--text-muted);margin-bottom:1rem;text-transform:uppercase;letter-spacing:.05em">Your Perfect Cheese</div>
      <img class="quiz-result-img" src="${main.img}" alt="${main.name}" onerror="this.src='';this.style.display='none'" />
      <h3>${main.name}</h3>
      <div class="result-origin">📍 ${main.origin}</div>
      <div class="result-desc">${main.desc}</div>
      <div style="display:flex;gap:.75rem;justify-content:center;flex-wrap:wrap;margin-bottom:1rem">
        <button class="btn-primary btn-large" onclick="addToCart(${main.id});closeModal('quiz-modal')">Add to Cart $${main.price.toFixed(2)}</button>
        <button class="btn-outline" onclick="closeModal('quiz-modal');openProduct(${main.id})">View Details</button>
      </div>
      ${alt ? `<p style="color:var(--text-muted);font-size:.88rem">You might also love: <strong style="cursor:pointer;color:var(--brown)" onclick="closeModal('quiz-modal');openProduct(${alt.id})">${alt.name}</strong></p>` : ''}
      <button class="btn-outline" style="margin-top:1rem" onclick="startQuiz()">Retake Quiz</button>
    </div>`;
}

// ===================== CLUB =====================
function joinClub(planName) {
  document.getElementById('club-plan-label').textContent = planName;
  showModal('club-modal');
}

function confirmClub() {
  closeModal('club-modal');
  toast('🎉 Welcome to the club! Your first box ships this Monday.');
}

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(CHEESES);
  renderTrades();
  renderDeals();
  renderCoupons();
  renderBoardPalette();
  renderRaffles();
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
