var user = require('./user.js');

var map = { width: 250, height: 250};

var board = {
  t5x97: 1, t23x98: 1, t50x99: 1, t12x100: 1, t31x101: 1, t6x106: 1, t18x107: 1, t2x110: 1, t42x110: 1, t49x116: 1, t26x119: 1, t27x119: 1, t26x120: 1, t27x120: 1, t43x126: 1, t36x130: 1, t22x134: 1, t24x134: 1, t22x135: 1, t24x135: 1, t22x136: 1, t24x136: 1, t22x137: 1, t24x137: 1, t22x138: 1, t24x138: 1, t25x138: 1, t22x139: 1, t25x139: 1, t23x140: 1, t25x140: 1, t23x141: 1, t25x141: 1, t23x142: 1, t25x142: 1, t22x143: 1, t25x143: 1, t21x144: 1, t22x144: 1, t24x144: 1, t25x144: 1, t20x145: 1, t24x145: 1, t20x146: 1, t22x146: 1, t23x146: 1, t24x146: 1, t20x147: 1, t22x147: 1, t20x148: 1, t22x148: 1, t20x149: 1, t22x149: 1, t0x150: 3, t1x150: 3, t2x150: 3, t3x150: 3, t4x150: 3, t5x150: 3, t6x150: 3, t7x150: 3, t8x150: 3, t9x150: 3, t10x150: 3, t11x150: 3, t12x150: 3, t13x150: 3, t14x150: 3, t15x150: 3, t16x150: 3, t17x150: 3, t18x150: 3, t19x150: 3, t20x150: 3, t22x150: 33, t23x150: 33, t24x150: 33, t25x150: 33, t26x150: 33, t27x150: 33, t28x150: 33, t29x150: 33, t30x150: 33, t31x150: 33, t32x150: 33, t33x150: 33, t34x150: 33, t35x150: 33, t36x150: 33, t37x150: 33, t38x150: 33, t39x150: 33, t40x150: 33, t41x150: 33, t42x150: 33, t43x150: 33, t44x150: 33, t45x150: 33, t46x150: 33, t47x150: 33, t48x150: 33, t49x150: 33, t50x150: 33, t51x150: 33, t52x150: 33, t53x150: 33, t54x150: 33, t55x150: 33, t56x150: 33, t57x150: 33, t58x150: 33, t59x150: 33, t60x150: 33, t61x150: 33, t62x150: 33, t63x150: 33, t64x150: 33, t65x150: 33, t66x150: 33, t67x150: 33, t68x150: 33, t69x150: 33, t70x150: 33, t71x150: 33, t72x150: 33, t73x150: 33, t74x150: 3, t75x150: 3, t76x150: 3, t77x150: 3, t78x150: 3, t79x150: 3, t80x150: 3, t81x150: 81, t82x150: 81, t85x150: 81, t0x151: 3, t1x151: 3, t2x151: 3, t3x151: 3, t4x151: 3, t5x151: 3, t6x151: 3, t7x151: 3, t8x151: 3, t9x151: 3, t10x151: 3, t11x151: 3, t22x151: 33, t23x151: 33, t24x151: 33, t25x151: 33, t26x151: 33, t27x151: 33, t28x151: 33, t29x151: 33, t30x151: 33, t31x151: 33, t32x151: 33, t33x151: 33, t34x151: 33, t35x151: 33, t36x151: 33, t37x151: 33, t38x151: 33, t39x151: 33, t40x151: 33, t41x151: 33, t42x151: 33, t43x151: 33, t44x151: 33, t45x151: 33, t46x151: 33, t47x151: 33, t48x151: 33, t49x151: 33, t50x151: 33, t51x151: 33, t52x151: 33, t53x151: 33, t54x151: 33, t55x151: 33, t56x151: 33, t57x151: 33, t58x151: 33, t59x151: 33, t60x151: 33, t61x151: 33, t62x151: 33, t63x151: 33, t64x151: 33, t65x151: 33, t66x151: 33, t67x151: 33, t68x151: 33, t69x151: 33, t70x151: 33, t71x151: 33, t72x151: 33, t73x151: 33, t81x151: 81, t82x151: 81, t85x151: 81, t0x152: 3, t3x152: 3, t7x152: 3, t24x152: 33, t25x152: 33, t26x152: 33, t27x152: 33, t28x152: 33, t29x152: 33, t30x152: 33, t31x152: 33, t32x152: 33, t33x152: 33, t34x152: 33, t35x152: 33, t36x152: 33, t37x152: 33, t38x152: 33, t39x152: 33, t40x152: 33, t41x152: 33, t42x152: 33, t43x152: 33, t44x152: 33, t45x152: 33, t46x152: 33, t47x152: 33, t48x152: 33, t49x152: 33, t50x152: 33, t51x152: 33, t52x152: 33, t53x152: 33, t54x152: 33, t55x152: 33, t56x152: 33, t57x152: 33, t58x152: 33, t59x152: 33, t60x152: 33, t61x152: 33, t62x152: 33, t63x152: 33, t64x152: 33, t65x152: 33, t66x152: 33, t67x152: 33, t68x152: 33, t69x152: 33, t70x152: 33, t71x152: 33, t72x152: 33, t73x152: 33, t81x152: 81, t85x152: 81, t86x152: 81, t115x152: 1, t116x152: 1, t117x152: 1, t118x152: 1, t119x152: 1, t120x152: 1, t121x152: 1, t122x152: 1, t123x152: 1, t124x152: 1, t125x152: 1, t126x152: 1, t127x152: 1, t128x152: 1, t129x152: 1, t130x152: 1, t131x152: 1, t132x152: 1, t133x152: 1, t134x152: 1, t135x152: 1, t136x152: 1, t137x152: 1, t138x152: 1, t139x152: 1, t140x152: 1, t141x152: 1, t142x152: 1, t143x152: 1, t0x153: 3, t27x153: 33, t28x153: 33, t29x153: 33, t30x153: 33, t31x153: 33, t32x153: 33, t33x153: 33, t34x153: 33, t35x153: 33, t36x153: 33, t37x153: 33, t38x153: 33, t39x153: 33, t40x153: 33, t41x153: 33, t42x153: 33, t43x153: 33, t44x153: 33, t45x153: 33, t46x153: 33, t47x153: 33, t48x153: 33, t49x153: 33, t50x153: 33, t51x153: 33, t52x153: 33, t53x153: 33, t54x153: 33, t55x153: 33, t56x153: 33, t57x153: 33, t58x153: 33, t59x153: 33, t60x153: 33, t61x153: 33, t62x153: 33, t63x153: 33, t67x153: 33, t68x153: 33, t69x153: 33, t70x153: 33, t71x153: 33, t72x153: 33, t82x153: 81, t83x153: 81, t86x153: 81, t115x153: 1, t143x153: 1, t0x154: 3, t29x154: 33, t30x154: 33, t31x154: 33, t32x154: 33, t33x154: 33, t34x154: 33, t35x154: 33, t36x154: 33, t37x154: 33, t38x154: 33, t39x154: 33, t40x154: 33, t41x154: 33, t42x154: 33, t43x154: 33, t44x154: 33, t45x154: 33, t46x154: 33, t47x154: 33, t48x154: 33, t49x154: 33, t50x154: 33, t51x154: 33, t52x154: 33, t53x154: 33, t54x154: 33, t55x154: 33, t56x154: 33, t57x154: 33, t58x154: 33, t59x154: 33, t60x154: 33, t61x154: 33, t62x154: 33, t63x154: 33, t67x154: 33, t68x154: 33, t69x154: 33, t70x154: 33, t71x154: 33, t72x154: 33, t82x154: 81, t83x154: 81, t86x154: 81, t115x154: 1, t143x154: 1, t0x155: 3, t30x155: 33, t31x155: 33, t32x155: 33, t33x155: 33, t34x155: 33, t35x155: 33, t36x155: 33, t37x155: 33, t38x155: 33, t39x155: 33, t40x155: 33, t41x155: 33, t42x155: 33, t43x155: 33, t44x155: 33, t45x155: 33, t46x155: 33, t47x155: 33, t48x155: 33, t49x155: 33, t50x155: 33, t51x155: 33, t52x155: 33, t53x155: 33, t54x155: 33, t55x155: 33, t56x155: 33, t57x155: 33, t58x155: 33, t59x155: 33, t60x155: 33, t61x155: 33, t62x155: 33, t63x155: 33, t67x155: 33, t68x155: 33, t69x155: 33, t70x155: 33, t71x155: 33, t82x155: 81, t83x155: 81, t85x155: 81, t86x155: 81, t115x155: 1, t143x155: 1, t0x156: 3, t52x156: 33, t53x156: 33, t54x156: 33, t55x156: 33, t56x156: 33, t57x156: 33, t58x156: 33, t59x156: 33, t60x156: 33, t61x156: 33, t62x156: 33, t63x156: 33, t64x156: 33, t65x156: 33, t66x156: 33, t67x156: 33, t68x156: 33, t69x156: 33, t70x156: 33, t81x156: 81, t82x156: 81, t85x156: 81, t86x156: 81, t115x156: 1, t143x156: 1, t0x157: 3, t1x157: 3, t14x157: 3, t15x157: 4, t53x157: 33, t54x157: 33, t55x157: 33, t56x157: 33, t57x157: 33, t58x157: 33, t59x157: 33, t60x157: 33, t61x157: 33, t62x157: 33, t63x157: 33, t64x157: 33, t65x157: 33, t66x157: 33, t67x157: 33, t68x157: 33, t69x157: 33, t70x157: 33, t81x157: 81, t86x157: 81, t115x157: 1, t143x157: 1, t1x158: 3, t14x158: 4, t15x158: 4, t55x158: 33, t56x158: 33, t57x158: 33, t58x158: 33, t59x158: 33, t60x158: 33, t61x158: 33, t62x158: 33, t63x158: 33, t64x158: 33, t65x158: 33, t66x158: 33, t67x158: 33, t68x158: 33, t69x158: 33, t81x158: 81, t86x158: 81, t115x158: 1, t143x158: 1, t1x159: 3, t55x159: 33, t56x159: 33, t57x159: 33, t58x159: 33, t59x159: 33, t60x159: 33, t61x159: 33, t62x159: 33, t63x159: 33, t64x159: 33, t65x159: 33, t66x159: 33, t67x159: 33, t68x159: 33, t81x159: 81, t86x159: 81, t115x159: 1, t143x159: 1, t1x160: 3, t2x160: 3, t62x160: 33, t63x160: 33, t64x160: 33, t65x160: 33, t66x160: 33, t67x160: 33, t68x160: 33, t80x160: 81, t85x160: 81, t86x160: 81, t115x160: 1, t143x160: 1, t2x161: 3, t80x161: 81, t85x161: 81, t86x161: 81, t115x161: 1, t143x161: 1, t2x162: 3, t37x162: 4, t38x162: 4, t39x162: 4, t40x162: 4, t41x162: 4, t76x162: 81, t79x162: 81, t80x162: 81, t81x162: 81, t82x162: 81, t85x162: 81, t86x162: 81, t87x162: 81, t115x162: 1, t143x162: 1, t2x163: 3, t33x163: 4, t34x163: 4, t35x163: 4, t36x163: 4, t42x163: 4, t43x163: 4, t44x163: 4, t76x163: 81, t77x163: 81, t78x163: 81, t79x163: 81, t86x163: 81, t87x163: 81, t115x163: 1, t143x163: 1, t2x164: 3, t32x164: 4, t45x164: 4, t46x164: 4, t47x164: 4, t76x164: 81, t77x164: 81, t87x164: 81, t88x164: 81, t89x164: 81, t115x164: 1, t143x164: 1, t2x165: 3, t30x165: 4, t31x165: 4, t48x165: 4, t49x165: 4, t50x165: 4, t76x165: 81, t88x165: 81, t89x165: 81, t115x165: 1, t116x165: 1, t117x165: 1, t118x165: 1, t119x165: 1, t120x165: 1, t121x165: 1, t122x165: 1, t123x165: 1, t124x165: 1, t125x165: 1, t126x165: 1, t127x165: 1, t128x165: 1, t129x165: 1, t130x165: 1, t131x165: 1, t132x165: 1, t133x165: 1, t134x165: 1, t135x165: 1, t136x165: 1, t137x165: 1, t138x165: 1, t139x165: 1, t140x165: 1, t141x165: 1, t142x165: 1, t143x165: 1, t2x166: 3, t29x166: 4, t51x166: 4, t52x166: 4, t53x166: 4, t76x166: 81, t89x166: 81, t2x167: 3, t3x167: 3, t28x167: 4, t54x167: 4, t76x167: 81, t89x167: 81, t3x168: 3, t27x168: 4, t55x168: 4, t56x168: 4, t76x168: 81, t89x168: 81, t3x169: 3, t27x169: 4, t57x169: 4, t76x169: 81, t89x169: 81, t3x170: 3, t28x170: 4, t58x170: 4, t59x170: 4, t76x170: 81, t89x170: 81, t2x171: 3, t28x171: 4, t60x171: 4, t61x171: 4, t76x171: 81, t89x171: 81, t90x171: 81, t2x172: 3, t29x172: 4, t61x172: 4, t76x172: 81, t90x172: 81, t2x173: 3, t30x173: 4, t31x173: 4, t32x173: 4, t33x173: 4, t34x173: 4, t35x173: 4, t62x173: 4, t76x173: 81, t90x173: 81, t1x174: 3, t2x174: 3, t36x174: 4, t37x174: 4, t38x174: 4, t62x174: 4, t76x174: 81, t90x174: 81, t1x175: 3, t38x175: 4, t62x175: 4, t76x175: 81, t90x175: 81, t1x176: 3, t39x176: 4, t40x176: 4, t62x176: 4, t76x176: 81, t91x176: 81, t1x177: 3, t41x177: 4, t42x177: 4, t43x177: 4, t44x177: 4, t45x177: 4, t46x177: 4, t47x177: 4, t48x177: 4, t49x177: 4, t61x177: 4, t76x177: 81, t91x177: 81, t1x178: 3, t50x178: 4, t51x178: 4, t60x178: 4, t61x178: 4, t76x178: 81, t91x178: 81, t1x179: 3, t2x179: 3, t52x179: 4, t53x179: 4, t59x179: 4, t60x179: 4, t76x179: 81, t91x179: 81, t2x180: 3, t53x180: 4, t54x180: 4, t55x180: 4, t56x180: 4, t57x180: 4, t58x180: 4, t75x180: 81, t76x180: 81, t90x180: 81, t2x181: 3, t75x181: 81, t90x181: 81, t2x182: 3, t75x182: 81, t90x182: 81, t2x183: 3, t75x183: 81, t76x183: 81, t90x183: 81, t2x184: 3, t76x184: 81, t77x184: 81, t89x184: 81, t90x184: 81, t2x185: 3, t77x185: 81, t89x185: 81, t1x186: 3, t2x186: 3, t77x186: 81, t88x186: 81, t1x187: 3, t77x187: 81, t88x187: 81, t1x188: 3, t77x188: 81, t88x188: 81, t1x189: 3, t76x189: 81, t77x189: 81, t88x189: 81, t1x190: 3, t2x190: 3, t76x190: 81, t88x190: 81, t2x191: 3, t76x191: 81, t88x191: 81, t2x192: 3, t3x192: 3, t76x192: 81, t88x192: 81, t3x193: 3, t76x193: 81, t88x193: 81, t3x194: 3, t76x194: 81, t88x194: 81, t3x195: 3, t77x195: 81, t88x195: 81, t3x196: 3, t77x196: 81, t88x196: 81, t2x197: 3, t77x197: 81, t88x197: 81, t1x198: 3, t2x198: 3, t77x198: 81, t89x198: 81, t1x199: 3, t2x199: 3, t77x199: 81, t89x199: 81, t2x200: 3, t76x200: 81, t89x200: 81, t2x201: 3, t76x201: 81, t89x201: 81, t3x202: 3, t76x202: 81, t89x202: 81, t3x203: 3, t33x203: 1, t34x203: 1, t35x203: 1, t36x203: 1, t37x203: 1, t76x203: 81, t89x203: 81, t3x204: 3, t33x204: 1, t37x204: 1, t76x204: 81, t89x204: 81, t3x205: 3, t33x205: 1, t37x205: 1, t75x205: 81, t89x205: 81, t3x206: 3, t33x206: 1, t37x206: 1, t75x206: 81, t89x206: 81, t3x207: 3, t33x207: 1, t34x207: 1, t36x207: 1, t37x207: 1, t74x207: 81, t89x207: 81, t3x208: 3, t33x208: 1, t34x208: 1, t36x208: 1, t37x208: 1, t74x208: 81, t89x208: 81, t4x209: 3, t74x209: 81, t89x209: 81, t90x209: 81, t4x210: 3, t5x210: 3, t73x210: 81, t74x210: 81, t90x210: 81, t5x211: 3, t73x211: 81, t90x211: 81, t5x212: 3, t73x212: 81, t90x212: 81, t5x213: 3, t73x213: 81, t90x213: 81, t5x214: 3, t6x214: 3, t73x214: 81, t90x214: 81, t6x215: 3, t73x215: 81, t90x215: 81, t7x216: 3, t73x216: 81, t89x216: 81, t90x216: 81, t7x217: 3, t72x217: 81, t89x217: 81, t7x218: 3, t72x218: 81, t88x218: 81, t89x218: 81, t7x219: 3, t71x219: 81, t72x219: 81, t88x219: 81, t7x220: 3, t67x220: 81, t68x220: 81, t69x220: 81, t70x220: 81, t71x220: 81, t87x220: 81, t88x220: 81, t7x221: 3, t62x221: 81, t63x221: 81, t64x221: 81, t65x221: 81, t66x221: 81, t87x221: 81, t6x222: 3, t7x222: 3, t52x222: 81, t53x222: 81, t54x222: 81, t55x222: 81, t56x222: 81, t57x222: 81, t58x222: 81, t59x222: 81, t60x222: 81, t61x222: 81, t87x222: 81, t4x223: 3, t5x223: 3, t6x223: 3, t40x223: 81, t41x223: 81, t42x223: 81, t43x223: 81, t44x223: 81, t45x223: 81, t46x223: 81, t47x223: 81, t48x223: 81, t49x223: 81, t50x223: 81, t51x223: 81, t87x223: 81, t0x224: 3, t1x224: 3, t2x224: 3, t3x224: 3, t4x224: 3, t35x224: 81, t36x224: 81, t37x224: 81, t38x224: 81, t39x224: 81, t87x224: 81, t0x225: 3, t26x225: 81, t27x225: 81, t28x225: 81, t29x225: 81, t30x225: 81, t31x225: 81, t32x225: 81, t33x225: 81, t34x225: 81, t86x225: 81, t87x225: 81, t0x226: 81, t1x226: 81, t2x226: 81, t3x226: 81, t4x226: 81, t5x226: 81, t10x226: 81, t11x226: 81, t12x226: 81, t13x226: 81, t14x226: 81, t15x226: 81, t16x226: 81, t17x226: 81, t18x226: 81, t19x226: 81, t20x226: 81, t21x226: 81, t22x226: 81, t23x226: 81, t24x226: 81, t25x226: 81, t86x226: 81, t6x227: 81, t7x227: 81, t8x227: 81, t9x227: 81, t10x227: 81, t86x227: 81, t49x228: 81, t50x228: 81, t51x228: 81, t52x228: 81, t53x228: 81, t54x228: 81, t55x228: 81, t56x228: 81, t57x228: 81, t58x228: 81, t59x228: 81, t85x228: 81, t47x229: 81, t48x229: 81, t49x229: 81, t59x229: 81, t60x229: 81, t61x229: 81, t62x229: 81, t63x229: 81, t64x229: 81, t85x229: 81, t45x230: 81, t46x230: 81, t65x230: 81, t66x230: 81, t84x230: 81, t29x231: 81, t30x231: 81, t31x231: 81, t32x231: 81, t33x231: 81, t41x231: 81, t42x231: 81, t43x231: 81, t44x231: 81, t67x231: 81, t68x231: 81, t69x231: 81, t83x231: 81, t84x231: 81, t0x232: 81, t1x232: 81, t2x232: 81, t3x232: 81, t4x232: 81, t5x232: 81, t6x232: 81, t7x232: 81, t8x232: 81, t9x232: 81, t10x232: 81, t11x232: 81, t12x232: 81, t13x232: 81, t14x232: 81, t15x232: 81, t16x232: 81, t17x232: 81, t18x232: 81, t19x232: 81, t20x232: 81, t21x232: 81, t22x232: 81, t23x232: 81, t24x232: 81, t25x232: 81, t26x232: 81, t27x232: 81, t28x232: 81, t34x232: 81, t35x232: 81, t36x232: 81, t37x232: 81, t38x232: 81, t39x232: 81, t40x232: 81, t70x232: 81, t71x232: 81, t72x232: 81, t82x232: 81, t72x233: 81, t73x233: 81, t74x233: 81, t81x233: 81, t82x233: 81, t74x234: 81, t75x234: 81, t76x234: 81, t77x234: 81, t78x234: 81, t79x234: 81, t80x234: 81
};

var Tile = function(id, blocks) {
	this.id = id;
	this.blocks = blocks;
};

exports.World = function (io) {

	var world = {
		
		users: {},

		tiles: {
			blocker: new Tile(1, true),
			mountain: new Tile(3, true),
			tree: new Tile(4, true),
			treeChopped: new Tile(5, true),
			water: new Tile(33, true),
			bridge: new Tile(34, false),
			thevoid: new Tile(81, true)
		},

		board: function() {
			return board;
		},

		boardAt: function(x,y) {
			return board["t" + x + "x" + y];
		},

		canGoTo: function(x,y) {

			if(x < 0 || x >= map.width || y < 0 || y >= map.height) return false;

			var tileId = this.boardAt(x,y);
			var tileToCheck;
			
			if(tileId === undefined) return true;

			for(var key in world.tiles) {
				var tile = world.tiles[key];
				if(tile.id === tileId) {
					tileToCheck = tile;
					break;
				}
			}

			return !tileToCheck.blocks;
		},

		setBoardAt: function(x,y,v) {
			board["t" + x + "x" + y] = v;
		},

		action: function(x, y, user) {
			// Chop tree
			if(this.boardAt(x,y) === world.tiles.tree.id) {
				this.setBoardAt(x,y,world.tiles.treeChopped.id);
				return { a: true, type: world.tiles.treeChopped.id };
			}

			// Build bridge
			if(this.boardAt(x,y) === world.tiles.water.id) {
				if(user.canBuildBridge()) {	
					this.setBoardAt(x,y,world.tiles.bridge.id);
					return { a: true, type: world.tiles.bridge.id };
				}
			}

			return { a: false };
		},

		noneUserAction: function(x, y) {
			if(this.boardAt(x,y) === 5) {
				this.setBoardAt(x,y,4);
				return true;
			}
		},

		Events: {
			connected: function(socket) {
				var char = new user(socket.id)
				world.users[socket.id] = char;
				socket.emit('connected', {c: char, u: world.users, b: world.board()});
				socket.broadcast.emit('otherConnected', {u: world.users[socket.id]});
			},

			disconnected: function(socket) {
				delete world.users[socket.id];
				socket.broadcast.emit('disconnected', {id: socket.id});
			},

			moved: function(socket, data) {

				var user = world.users[socket.id];
				var newPos = [user.pos[0],user.pos[1]];
				var sfx;
				switch(data.d) {
					case "d": 
						newPos[1]++;
						user.si = 0;
						break;
					case "u": 
						newPos[1]--;
						user.si = 1;
						break;
					case "r": 
						newPos[0]++;
						user.si = 2;
						break;
					case "l": 
						newPos[0]--;
						user.si = 3;
						break;
				}

				if(world.canGoTo(newPos[0], newPos[1])) {

					if(newPos[0] === 218 && newPos[1] === 4) {
						newPos = [247,91];
					}
					else if(newPos[0] === 240 && newPos[1] === 88) {
						newPos = [65,5];
					}
					else if(newPos[0] === 35 && newPos[1] === 56) {
						newPos = [218,13];
					}

					world.users[socket.id].move(newPos);
				}

				socket.emit('cm', {u: world.users[socket.id], sfx: sfx});
				socket.broadcast.emit('ocu', {u: world.users[socket.id]});
			},

			action: function(socket) {

				var user = world.users[socket.id];
				var pos = user.pointingPos();
				var actionResult = world.action(pos[0], pos[1], user);

				if(actionResult.a && actionResult.type === world.tiles.treeChopped.id) {  
					user.increaseWoodAmount();
					socket.emit('wood', {u: user});
					io.sockets.emit('worldChanged', {x: pos[0], y: pos[1], v: world.tiles.treeChopped.id});

					setTimeout(function() { 
						if(world.noneUserAction(pos[0], pos[1])) {
							io.sockets.emit('worldChanged', {x: pos[0], y: pos[1], v: world.tiles.tree.id});
						}
					}, 5000); 
				}

				if(actionResult.a && actionResult.type === world.tiles.bridge.id) {
					user.buildBridge();
					socket.emit('wood', {u: user});
					io.sockets.emit('worldChanged', {x: pos[0], y: pos[1], v: world.tiles.bridge.id});
				}  
			}
		}
	};

	io.sockets.on('connection', function (socket) {

		world.Events.connected(socket);

		socket.on('disconnect', function () {
			world.Events.disconnected(socket);
		});

		socket.on('a', function () {
			world.Events.action(socket);
		});

		socket.on('cu', function (data) {
			world.Events.moved(socket, data);
		});

		socket.on('cm', function (data) {
			world.Events.moved(socket, data);
		});
	});
};