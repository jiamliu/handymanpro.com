const db = require('../db');
const { Pns,Handyman,Tool } = require('../models');
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const pns1 = await Pns.create({
        image: 'https://www.fusionkc.com/wp-content/uploads/changing-lightbulb.jpg',
        name: 'Replace Your Light Bulbs',
        steps: [
            'Step 1: Turn off the power to the light fixture,',
            'Step 2: Remove the old light bulb by twisting it counterclockwise,',
            'Step 3: Insert the new light bulb by twisting it clockwise until its snug,',
            'Step 4: Turn the power back on to the light fixture and test the new bulb.'
        ],
        video_tutorial: 'https://www.youtube.com/embed/P5_2mxvkZ0o?si=uETBO4NyGk8cyX1e'
    });
    pns1.save()

    const pns2 = await Pns.create({
        image:'https://www.thespruce.com/thmb/wEuathuzhPYRoMvHnbuGrhy6ZFI=/6059x4039/filters:no_upscale()/remove-a-kitchen-faucet-2718825-05-b97ce3cfdc0f4c1f98036293448e122d.jpg',
        name: 'Replace Bathroom Faucet',
        steps: [
            'Step 1: Turn off water supply valves under the sink.',
            'Step 2: Disconnect water supply lines from old faucet.',
            'Step 3: Remove old faucet and clean sink surface.',
            'Step 4: Install new faucet according to manufacturer instructions.',
            'Step 5: Reconnect water supply lines and turn on valves.'
        ],
        video_tutorial: 'https://www.youtube.com/embed/9XBYxHYWEhk?si=33wM5-60extXCU65'
    });
    pns2.save()

    const pns3 = await Pns.create({
        image:'https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2022/06/How-To-Fix-a-Cracked-Floor-Tile.jpg',
        name: 'Repair Cracked Tiles',
        steps: [
            'Step 1: Remove grout around cracked tile using grout saw.',
            'Step 2: Break and remove cracked tile with a chisel.',
            'Step 3: Clean area and apply adhesive.',
            'Step 4: Set new tile in place and let dry.',
            'Step 5: Apply grout and remove excess with a damp sponge.',
            'Step 6: Let grout dry, then buff tiles with a dry cloth.',
            'Step 7: Seal grout to finish.'
        ],
        video_tutorial: 'https://www.youtube.com/embed/0hT9C_n6S7w?si=sTp-KoSAyXGECfDz'
    });
    pns3.save()

    const pns4 = await Pns.create({
        image:'https://www.moneypit.com/wp-content/uploads/2017/01/spackle_wall_crack_repair_drywall_shutterstock_170324012.jpg',
        name: 'Repair Cracked Dry Walls',
        steps: [
            'Step 1: Clean area and remove loose debris.',
            'Step 2: Apply mesh tape over the crack.',
            'Step 3: Spread joint compound over the tape.',
            'Step 4: Smooth compound with a putty knife.',
            'Step 5: Let dry and sand lightly.',
            'Step 6: Apply second coat of compound and sand again.',
            'Step 7: Prime and paint the repaired area.'
        ],
        video_tutorial: 'https://www.youtube.com/embed/qEWJEB80tzA?si=baGLNK0FUpVx5ELZ'
    });
    pns4.save()

    const pns5 = await Pns.create({
        image:'https://www.comfort-air.com/residential/wp-content/uploads/sites/4/2021/11/primo-Clogged-Toilet-Repair.jpg',
        name: 'Repair Your Clogged Toilet',
        steps: [
            'Step 1: Turn off water supply valve behind the toilet.',
            'Step 2: Use a plunger to attempt to clear the blockage.',
            'Step 3: If still clogged, use a toilet auger to break up the obstruction.',
            'Step 4: Flush toilet to test.',
            'Step 5: If necessary, repeat plunging or augering steps.',
            'Step 6: Turn water supply back on.',
            'Step 7: Clean up any mess and dispose of waste properly.'
        ],
        video_tutorial: 'https://www.youtube.com/embed/Q7iNZNSEfYA?si=2v1HXuGoUMeuzG5h'
    });
    pns5.save()

    const pns6 = await Pns.create({
        image:'https://images.prismic.io/blogmigration/7583777e-9cf3-4568-97be-7f11f3a2af9b_blinds-with-bent-slats.jpg?auto=compress,format',
        name: 'Replace Your Blinds',
        steps: [
            'Step 1: Measure Your Window: Measure the width and height of your window to ensure you purchase blinds that fit correctly.',
            'Step 2: Choose Blinds: Select blinds that match your measurements and style preferences.',
            'Step 3: Remove Old Blinds: Use a screwdriver to detach the brackets holding the old blinds. Take down the blinds and any additional hardware.',
            'Step 4: Prepare New Hardware: If the new blinds require different brackets, assemble and install them according to the manufacturer\'s instructions.',
            'Step 5: Attach Brackets: Position the brackets at the top corners of the window frame. Use a pencil to mark the screw holes, then secure the brackets in place with screws.',
            'Step 6: Install New Blinds: Slide the headrail of the blinds into the brackets. Ensure the blinds are level by using a spirit level. Close the brackets securely.',
            'Step 7: Test Operation: Pull the blinds up and down to test their operation. Make any necessary adjustments to ensure they move smoothly.',
            'Step 8: Final Adjustments: Adjust the length of the blinds if needed. Trim any excess cord or slats to achieve the desired length.'
        ],
        video_tutorial: 'https://www.youtube.com/embed/lqrk3A5ioQE?si=M5fJzabHZUwQAmFN'
    });
    pns6.save()

    const pns7 = await Pns.create({
        image:'https://ambrosetileandcarpet.com/wp-content/uploads/2019/06/services-hardwood-floor-repair.jpg',
        name: 'Repair Your Wood Floor',
        steps: [
            'Step 1: Assess Damage: Identify the extent of damage and prepare necessary tools and materials.',
            'Step 2: Remove Damaged Planks: Use a circular saw to cut out the damaged section of flooring along its length.',
            'Step 3: Prepare Replacement Planks: Cut replacement planks to size, ensuring a snug fit.',
            'Step 4: Fit Replacement Planks: Slide replacement planks into place, applying wood glue along the tongue and groove edges.',
            'Step 5: Secure Replacement Planks: Use a flooring nailer to secure replacement planks to the subfloor.',
            'Step 6: Sand and Finish: Sand the repaired area to blend with surrounding flooring, then apply matching finish.',
            'Step 7: Allow to Dry: Let the finish dry completely before walking on the repaired area.'
        ],
        video_tutorial: 'https://www.youtube.com/embed/8Rgw2TkyYEQ?si=dtbqCASOgIyMT-hG'
    });
    pns7.save()

    const pns8 = await Pns.create({
        image:'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/6/8/0/Original_Jennie-Andrews_How-to-repair-carpet_2.jpg.rend.hgtvcom.616.411.suffix/1654707052285.jpeg',
        name: 'Repair Your Carpets',
        steps: [
            'Step 1: Assess Damage: Inspect the damaged area to determine the extent of the damage and prepare necessary tools and materials.',
            'Step 2: Remove Old Carpet: Use a utility knife to cut away the damaged section of carpet and remove it from the tack strips.',
            'Step 3: Prepare Subfloor: Clean and prepare the subfloor, ensuring it is free from debris and smooth.',
            'Step 4: Measure and Cut Replacement Carpet: Measure the area to be replaced and cut the new carpet to size, leaving a few inches of excess on each side.',
            'Step 5: Install Carpet Pad: Lay down a new carpet pad if necessary, ensuring it fits snugly within the area.',
            'Step 6: Install New Carpet: Lay the replacement carpet over the pad, ensuring it is properly aligned and stretched tightly over the tack strips.',
            'Step 7: Trim Excess Carpet: Trim any excess carpet along the edges, using a carpet knife or utility knife.',
            'Step 8: Finishing Touches: Use a carpet roller to press the edges of the new carpet firmly into the tack strips and ensure a seamless transition with the surrounding carpet.'
        ],
        video_tutorial: 'https://www.youtube.com/embed/ByVoCUTxpO0?si=CKVuO51Z_S44vs9l'
    });
    pns8.save()

    const pns9 = await Pns.create({
        image:'https://i0.wp.com/vargaspaintandtexture.com/wp-content/uploads/2020/12/Image-of-exterior-wall-repairs-and-stucco-painting-completed-by-vargas-paint-and-texture-Best-house-painters-near-me-in-san-antonio.jpg?ssl=1',
        name: 'Repair Your Exterior Wall',
        steps: [
            'Step 1: Inspect Walls: Identify areas of damage, including cracks, holes, or damaged siding.',
            'Step 2: Clean Surface: Remove dirt, debris, and loose material from the damaged areas using a brush or pressure washer.',
            'Step 3: Repair Cracks and Holes: Fill small cracks and holes with exterior-grade caulk or filler. For larger holes, use a patching compound or replace damaged sections of siding.',
            'Step 4: Replace Damaged Siding: Remove and replace damaged siding panels, ensuring proper alignment and attachment to the wall framing.',
            'Step 5: Seal Joints: Apply exterior caulking or sealant to joints, seams, and gaps to prevent water infiltration.',
            'Step 6: Prime Surface: Apply a primer to the repaired areas to promote adhesion and improve the durability of the finish coat.',
            'Step 7: Paint or Finish: Apply an exterior paint or finish to the repaired areas, matching the existing color and texture of the wall.'
        ],
        video_tutorial: 'https://www.youtube.com/embed/H9Y4cSsKb4c?si=QzSJCJFeWjjTMawj'
    });
    pns9.save()

    const pns10 = await Pns.create({
        image:'https://www.hardwaresource.com/resources/wp-content/uploads/2023/12/01-Common-Door-Hinge-Issues-and-How-to-Fix-Them.png',
        name: 'Repair Your Inside Doors and Cabinent Hinge',
        steps: [
            'Step 1: Gather Materials: Obtain a replacement hinge, screwdriver, screws, and drill if necessary.',
            'Step 2: Remove Old Hinge: Unscrew old hinge from cabinet door and frame. Remove any remaining screws or pieces.',
            'Step 3: Prepare Surface: Clean area where old hinge was attached. Ensure surface is dry and free from obstructions.',
            'Step 4: Position New Hinge: Align new hinge in the same location as the old one, ensuring correct orientation.',
            'Step 5: Attach New Hinge: Secure new hinge to cabinet door and frame using appropriate screws.',
            'Step 6: Adjustment: Test door to ensure smooth operation. Make necessary adjustments to hinge position or tension screws.',
            'Step 7: Finishing Touches: Tighten all screws securely. Check for gaps or misalignment and make adjustments as needed.',
        ],
        video_tutorial: 'https://www.youtube.com/embed/76csRH3TUjc?si=jFZbnDCiBRZWV5ky'
    });
    pns10.save()


   const tools = [
    {
        tools : 'Thunderlight Energy Saving Bulbs',
        image: 'https://wyattdowling.ca/get/files/image/galleries/Led_Light_Blog_Image_1200x630.jpg',
        description:'Thunderlight Energy Saving Bulbs is one of the most innovative light bulbs that helps you save over $200 a year in electricity cost.',
        purchase_link : 'www.thunderlight.com/energy_saving_bulbs',
        pns: pns1._id
    },
    {
        tools : 'Deluxe Silver Faucet',
        image:'https://www.deluxevanity.com/CAL-K51-100SQ-FB-DL1.JPEG?1686234206447',
        description:'In the past 37 years, Deluxe Brand had provided our customers with the best user experiences. Our easy-to-install faucet would save you time and money, while maintaining the highest reliability and performance.',
        purchase_link : 'www.deluxefaucet.com/purchase/deluxesilver1',
        pns: pns2._id
    },
    {
        tools : 'MagicEzy Tile Repair Kit',
        image:'https://m.media-amazon.com/images/I/61KTcL5E-rL.jpg',
        description:'Repair your tile with ease? MagicEzy Tile Repair Kit is here to help!',
        purchase_link : 'www.magicezytiles.com',
        pns: pns3._id
    },
    {
        tools : 'UltraThin Dry Wall Patch',
        image:'https://www.alltopbargains.com/cdn/shop/files/8172023655-6_473x473.jpg?v=1692336139',
        description:'Be a wall repairing expert with our Ultrathin Dry Wall Patch!',
        purchase_link : 'www.ultrathindrywallpatch.com',
        pns: pns4._id
    },
    {
        tools : 'Ckedes Toilet Plunger',
        image:'https://m.media-amazon.com/images/I/615RXblk-oL._AC_UF894,1000_QL80_.jpg',
        description:'The most advanced toilet plunger you can find, Ckedes Toilet Plunger will help you repair clogged toilet within seconds.',
        purchase_link : 'www.ckedes.com/toilet_plunger',
        pns: pns5._id
    },
    {
        tools : 'Nutro Window Blinds',
        image:'https://www.theblindssource.com/wp-content/uploads/2019/09/1st-4-606x639.jpg',
        description:'Nutro Window Blinds provides you with the most enjoyable user experience. Motorized Blinds available too! Click the link below to buy.',
        purchase_link : 'www.nutroblinds.com',
        pns: pns6._id
    },
    {
        tools : 'Laminate Flooring Repair Kit',
        image:'https://i5.walmartimages.com/asr/ecc197d7-aade-425d-b75b-266b70bbeb99.8a13f9b9e4eed805af1b7a6675bf63bb.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
        description:'Laminate Floor Repair Kit 17 PCS with 11-Color Wax Wood Surface Scratch Repair kit Design for Laminate Floor, Worktop, Furniture.',
        purchase_link : 'www.laminatehomerepair.com/kits',
        pns: pns7._id
    },
    {
        tools : 'Cookie Cutter Carpet Repair Kit',
        image:'https://www.baneclene.com/Uploads/CookieCutter.jpg',
        description:'User-friendly, and affordable way to repair your carpet.',
        purchase_link : 'www.baneclene.com/kits/carpet_repair_kit',
        pns: pns8._id
    },
    {
        tools : 'Spackle Wall Repair Kit',
        image:'https://m.media-amazon.com/images/I/71OM+128-sL._AC_UF350,350_QL80_.jpg',
        description:'100% Satisfactory After-Sales Service - We promise you a 60-Day Money Back Guarantee and after-sales guarantee for defective products.',
        purchase_link : 'www.spacklewallrepair.com/kits/ankita',
        pns: pns9._id
    },
    {
        tools : 'Cabinet Hinge Repair Plate - Stainless Steel Repair Kit',
        image:'https://m.media-amazon.com/images/I/61PFaGb34oL.jpg',
        description:'Our cabinet hinge repair bracket is made of brushed stainless steel instead of ordinary stainless steel; Brushed stainless steel is not rusty, beautiful, stable, and reliable, so can serve you for a long time.',
        purchase_link : 'www.clinetools.com/purchase/cabinet-hinge-repair-kit/',
        pns: pns10._id
    },
   ]
   await Tool.insertMany(tools)
   console.log('Created Tools!')

   const handyman = [
    {
        name: 'Johnny and sons Inc',
        address: '100 King St, Dallas, TX, 75070',
        contact: '469-123-1234',
        rating: '5/5',
        pns: pns1._id
    },
    {
        name: 'Kline Repair LLC',
        address: '105 South Central Expressway, Dallas, TX, 75070',
        contact: '469-777-2314',
        rating: '5/5',
        pns: pns2._id
    },
    {
        name: 'Dallas Home Repair LLC',
        address: '300 S Shiloh St, Garland, TX, 75004',
        contact: '469-753-1294',
        rating: '5/5',
        pns: pns3._id
    },
    {
        name: 'iRepair LLC',
        address: '405 N Central Pkwy 104, Richardson, TX, 75080',
        contact: '972-395-1718',
        rating: '5/5',
        pns: pns4._id
    },
    {
        name: 'Omar Repair Shop',
        address: '3072 N Smith Dr, Dallas, TX, 75073',
        contact: '972-331-3927',
        rating: '5/5',
        pns: pns5._id
    },
    {
        name: 'Chris Hines Repair',
        address: '1700 S Central Expy #500, Richardson, TX, 75081',
        contact: '972-700-8783',
        rating: '5/5',
        pns: pns6._id
    },
    {
        name: 'Johnson Repair Shop',
        address: '1789 N Central Expy, Richardson, TX, 75080',
        contact: '469-795-0003',
        rating: '5/5',
        pns: pns7._id
    },
    {
        name: 'Mark Jackson Repair',
        address: '4900 Shiloh St, Plano, TX, 75076',
        contact: '469-915-5153',
        rating: '5/5',
        pns: pns8._id
    },
    {
        name: 'Mike Repair It',
        address: '3110 W Marsh Ln, Plano, TX, 75070',
        contact: '469-123-9999',
        rating: '5/5',
        pns: pns9._id
    },
    {
        name: 'We Know Repair',
        address: '19 Main St, Dallas, TX, 75008',
        contact: '469-818-8818',
        rating: '5/5',
        pns: pns10._id
    },
    ]
    await Handyman.insertMany(handyman)
    console.log('Added Handymen Successful!')

}

const run = async () => {
    await main()
    db.close()
  }
  
  run()

