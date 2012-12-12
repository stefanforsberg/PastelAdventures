var user = require('./user.js');

var map = { width: 250, height: 100};

var board = {
  t0x0: 3, t1x0: 3, t2x0: 3, t3x0: 3, t4x0: 3, t5x0: 3, t6x0: 3, t7x0: 3, t8x0: 3, t9x0: 3, t10x0: 3, t11x0: 3, t12x0: 3, t13x0: 3, t14x0: 3, t15x0: 3, t16x0: 3, t17x0: 3, t18x0: 3, t19x0: 3, t20x0: 3, t21x0: 3, t22x0: 33, t23x0: 33, t24x0: 33, t25x0: 33, t26x0: 33, t27x0: 33, t28x0: 33, t29x0: 33, t30x0: 33, t31x0: 33, t32x0: 33, t33x0: 33, t34x0: 33, t35x0: 33, t36x0: 33, t37x0: 33, t38x0: 33, t39x0: 33, t40x0: 33, t41x0: 33, t42x0: 33, t43x0: 33, t44x0: 33, t45x0: 33, t46x0: 33, t47x0: 33, t48x0: 33, t49x0: 33, t50x0: 33, t51x0: 33, t52x0: 33, t53x0: 33, t54x0: 33, t55x0: 33, t56x0: 33, t57x0: 33, t58x0: 33, t59x0: 33, t60x0: 33, t61x0: 33, t62x0: 33, t63x0: 33, t64x0: 33, t65x0: 33, t66x0: 33, t67x0: 33, t68x0: 33, t69x0: 33, t70x0: 33, t71x0: 33, t72x0: 33, t73x0: 33, t74x0: 3, t75x0: 3, t76x0: 3, t77x0: 3, t78x0: 3, t79x0: 3, t80x0: 3, t81x0: 81, t82x0: 81, t85x0: 81, t0x1: 3, t1x1: 3, t2x1: 3, t3x1: 3, t4x1: 3, t5x1: 3, t6x1: 3, t7x1: 3, t8x1: 3, t9x1: 3, t10x1: 3, t11x1: 3, t22x1: 33, t23x1: 33, t24x1: 33, t25x1: 33, t26x1: 33, t27x1: 33, t28x1: 33, t29x1: 33, t30x1: 33, t31x1: 33, t32x1: 33, t33x1: 33, t34x1: 33, t35x1: 33, t36x1: 33, t37x1: 33, t38x1: 33, t39x1: 33, t40x1: 33, t41x1: 33, t42x1: 33, t43x1: 33, t44x1: 33, t45x1: 33, t46x1: 33, t47x1: 33, t48x1: 33, t49x1: 33, t50x1: 33, t51x1: 33, t52x1: 33, t53x1: 33, t54x1: 33, t55x1: 33, t56x1: 33, t57x1: 33, t58x1: 33, t59x1: 33, t60x1: 33, t61x1: 33, t62x1: 33, t63x1: 33, t64x1: 33, t65x1: 33, t66x1: 33, t67x1: 33, t68x1: 33, t69x1: 33, t70x1: 33, t71x1: 33, t72x1: 33, t73x1: 33, t81x1: 81, t82x1: 81, t85x1: 81, t0x2: 3, t3x2: 3, t7x2: 3, t24x2: 33, t25x2: 33, t26x2: 33, t27x2: 33, t28x2: 33, t29x2: 33, t30x2: 33, t31x2: 33, t32x2: 33, t33x2: 33, t34x2: 33, t35x2: 33, t36x2: 33, t37x2: 33, t38x2: 33, t39x2: 33, t40x2: 33, t41x2: 33, t42x2: 33, t43x2: 33, t44x2: 33, t45x2: 33, t46x2: 33, t47x2: 33, t48x2: 33, t49x2: 33, t50x2: 33, t51x2: 33, t52x2: 33, t53x2: 33, t54x2: 33, t55x2: 33, t56x2: 33, t57x2: 33, t58x2: 33, t59x2: 33, t60x2: 33, t61x2: 33, t62x2: 33, t63x2: 33, t64x2: 33, t65x2: 33, t66x2: 33, t67x2: 33, t68x2: 33, t69x2: 33, t70x2: 33, t71x2: 33, t72x2: 33, t73x2: 33, t81x2: 81, t85x2: 81, t86x2: 81, t115x2: 1, t116x2: 1, t117x2: 1, t118x2: 1, t119x2: 1, t120x2: 1, t121x2: 1, t122x2: 1, t123x2: 1, t124x2: 1, t125x2: 1, t126x2: 1, t127x2: 1, t128x2: 1, t129x2: 1, t130x2: 1, t131x2: 1, t132x2: 1, t133x2: 1, t134x2: 1, t135x2: 1, t136x2: 1, t137x2: 1, t138x2: 1, t139x2: 1, t140x2: 1, t141x2: 1, t142x2: 1, t143x2: 1, t0x3: 3, t27x3: 33, t28x3: 33, t29x3: 33, t30x3: 33, t31x3: 33, t32x3: 33, t33x3: 33, t34x3: 33, t35x3: 33, t36x3: 33, t37x3: 33, t38x3: 33, t39x3: 33, t40x3: 33, t41x3: 33, t42x3: 33, t43x3: 33, t44x3: 33, t45x3: 33, t46x3: 33, t47x3: 33, t48x3: 33, t49x3: 33, t50x3: 33, t51x3: 33, t52x3: 33, t53x3: 33, t54x3: 33, t55x3: 33, t56x3: 33, t57x3: 33, t58x3: 33, t59x3: 33, t60x3: 33, t61x3: 33, t62x3: 33, t63x3: 33, t67x3: 33, t68x3: 33, t69x3: 33, t70x3: 33, t71x3: 33, t72x3: 33, t82x3: 81, t83x3: 81, t86x3: 81, t115x3: 1, t143x3: 1, t0x4: 3, t29x4: 33, t30x4: 33, t31x4: 33, t32x4: 33, t33x4: 33, t34x4: 33, t35x4: 33, t36x4: 33, t37x4: 33, t38x4: 33, t39x4: 33, t40x4: 33, t41x4: 33, t42x4: 33, t43x4: 33, t44x4: 33, t45x4: 33, t46x4: 33, t47x4: 33, t48x4: 33, t49x4: 33, t50x4: 33, t51x4: 33, t52x4: 33, t53x4: 33, t54x4: 33, t55x4: 33, t56x4: 33, t57x4: 33, t58x4: 33, t59x4: 33, t60x4: 33, t61x4: 33, t62x4: 33, t63x4: 33, t67x4: 33, t68x4: 33, t69x4: 33, t70x4: 33, t71x4: 33, t72x4: 33, t82x4: 81, t83x4: 81, t86x4: 81, t115x4: 1, t143x4: 1, t0x5: 3, t30x5: 33, t31x5: 33, t32x5: 33, t33x5: 33, t34x5: 33, t35x5: 33, t36x5: 33, t37x5: 33, t38x5: 33, t39x5: 33, t40x5: 33, t41x5: 33, t42x5: 33, t43x5: 33, t44x5: 33, t45x5: 33, t46x5: 33, t47x5: 33, t48x5: 33, t49x5: 33, t50x5: 33, t51x5: 33, t52x5: 33, t53x5: 33, t54x5: 33, t55x5: 33, t56x5: 33, t57x5: 33, t58x5: 33, t59x5: 33, t60x5: 33, t61x5: 33, t62x5: 33, t63x5: 33, t67x5: 33, t68x5: 33, t69x5: 33, t70x5: 33, t71x5: 33, t82x5: 81, t83x5: 81, t85x5: 81, t86x5: 81, t115x5: 1, t143x5: 1, t0x6: 3, t52x6: 33, t53x6: 33, t54x6: 33, t55x6: 33, t56x6: 33, t57x6: 33, t58x6: 33, t59x6: 33, t60x6: 33, t61x6: 33, t62x6: 33, t63x6: 33, t64x6: 33, t65x6: 33, t66x6: 33, t67x6: 33, t68x6: 33, t69x6: 33, t70x6: 33, t81x6: 81, t82x6: 81, t85x6: 81, t86x6: 81, t115x6: 1, t143x6: 1, t0x7: 3, t1x7: 3, t14x7: 3, t15x7: 4, t53x7: 33, t54x7: 33, t55x7: 33, t56x7: 33, t57x7: 33, t58x7: 33, t59x7: 33, t60x7: 33, t61x7: 33, t62x7: 33, t63x7: 33, t64x7: 33, t65x7: 33, t66x7: 33, t67x7: 33, t68x7: 33, t69x7: 33, t70x7: 33, t81x7: 81, t86x7: 81, t115x7: 1, t143x7: 1, t1x8: 3, t14x8: 4, t15x8: 4, t55x8: 33, t56x8: 33, t57x8: 33, t58x8: 33, t59x8: 33, t60x8: 33, t61x8: 33, t62x8: 33, t63x8: 33, t64x8: 33, t65x8: 33, t66x8: 33, t67x8: 33, t68x8: 33, t69x8: 33, t81x8: 81, t86x8: 81, t115x8: 1, t143x8: 1, t1x9: 3, t55x9: 33, t56x9: 33, t57x9: 33, t58x9: 33, t59x9: 33, t60x9: 33, t61x9: 33, t62x9: 33, t63x9: 33, t64x9: 33, t65x9: 33, t66x9: 33, t67x9: 33, t68x9: 33, t81x9: 81, t86x9: 81, t115x9: 1, t143x9: 1, t1x10: 3, t2x10: 3, t62x10: 33, t63x10: 33, t64x10: 33, t65x10: 33, t66x10: 33, t67x10: 33, t68x10: 33, t80x10: 81, t85x10: 81, t86x10: 81, t115x10: 1, t143x10: 1, t2x11: 3, t80x11: 81, t85x11: 81, t86x11: 81, t115x11: 1, t143x11: 1, t2x12: 3, t37x12: 4, t38x12: 4, t39x12: 4, t40x12: 4, t41x12: 4, t76x12: 81, t79x12: 81, t80x12: 81, t81x12: 81, t82x12: 81, t85x12: 81, t86x12: 81, t87x12: 81, t115x12: 1, t143x12: 1, t2x13: 3, t33x13: 4, t34x13: 4, t35x13: 4, t36x13: 4, t42x13: 4, t43x13: 4, t44x13: 4, t76x13: 81, t77x13: 81, t78x13: 81, t79x13: 81, t86x13: 81, t87x13: 81, t115x13: 1, t143x13: 1, t2x14: 3, t32x14: 4, t45x14: 4, t46x14: 4, t47x14: 4, t76x14: 81, t77x14: 81, t87x14: 81, t88x14: 81, t89x14: 81, t115x14: 1, t143x14: 1, t2x15: 3, t30x15: 4, t31x15: 4, t48x15: 4, t49x15: 4, t50x15: 4, t76x15: 81, t88x15: 81, t89x15: 81, t115x15: 1, t116x15: 1, t117x15: 1, t118x15: 1, t119x15: 1, t120x15: 1, t121x15: 1, t122x15: 1, t123x15: 1, t124x15: 1, t125x15: 1, t126x15: 1, t127x15: 1, t128x15: 1, t129x15: 1, t130x15: 1, t131x15: 1, t132x15: 1, t133x15: 1, t134x15: 1, t135x15: 1, t136x15: 1, t137x15: 1, t138x15: 1, t139x15: 1, t140x15: 1, t141x15: 1, t142x15: 1, t143x15: 1, t2x16: 3, t29x16: 4, t51x16: 4, t52x16: 4, t53x16: 4, t76x16: 81, t89x16: 81, t2x17: 3, t3x17: 3, t28x17: 4, t54x17: 4, t76x17: 81, t89x17: 81, t3x18: 3, t27x18: 4, t55x18: 4, t56x18: 4, t76x18: 81, t89x18: 81, t3x19: 3, t27x19: 4, t57x19: 4, t76x19: 81, t89x19: 81, t3x20: 3, t28x20: 4, t58x20: 4, t59x20: 4, t76x20: 81, t89x20: 81, t2x21: 3, t28x21: 4, t60x21: 4, t61x21: 4, t76x21: 81, t89x21: 81, t90x21: 81, t2x22: 3, t29x22: 4, t61x22: 4, t76x22: 81, t90x22: 81, t2x23: 3, t30x23: 4, t31x23: 4, t32x23: 4, t33x23: 4, t34x23: 4, t35x23: 4, t62x23: 4, t76x23: 81, t90x23: 81, t1x24: 3, t2x24: 3, t36x24: 4, t37x24: 4, t38x24: 4, t62x24: 4, t76x24: 81, t90x24: 81, t1x25: 3, t38x25: 4, t62x25: 4, t76x25: 81, t90x25: 81, t1x26: 3, t39x26: 4, t40x26: 4, t62x26: 4, t76x26: 81, t91x26: 81, t1x27: 3, t41x27: 4, t42x27: 4, t43x27: 4, t44x27: 4, t45x27: 4, t46x27: 4, t47x27: 4, t48x27: 4, t49x27: 4, t61x27: 4, t76x27: 81, t91x27: 81, t1x28: 3, t50x28: 4, t51x28: 4, t60x28: 4, t61x28: 4, t76x28: 81, t91x28: 81, t1x29: 3, t2x29: 3, t52x29: 4, t53x29: 4, t59x29: 4, t60x29: 4, t76x29: 81, t91x29: 81, t2x30: 3, t53x30: 4, t54x30: 4, t55x30: 4, t56x30: 4, t57x30: 4, t58x30: 4, t75x30: 81, t76x30: 81, t90x30: 81, t2x31: 3, t75x31: 81, t90x31: 81, t2x32: 3, t75x32: 81, t90x32: 81, t2x33: 3, t75x33: 81, t76x33: 81, t90x33: 81, t2x34: 3, t76x34: 81, t77x34: 81, t89x34: 81, t90x34: 81, t2x35: 3, t77x35: 81, t89x35: 81, t1x36: 3, t2x36: 3, t77x36: 81, t88x36: 81, t1x37: 3, t77x37: 81, t88x37: 81, t1x38: 3, t77x38: 81, t88x38: 81, t1x39: 3, t76x39: 81, t77x39: 81, t88x39: 81, t1x40: 3, t2x40: 3, t76x40: 81, t88x40: 81, t2x41: 3, t76x41: 81, t88x41: 81, t2x42: 3, t3x42: 3, t76x42: 81, t88x42: 81, t3x43: 3, t76x43: 81, t88x43: 81, t3x44: 3, t76x44: 81, t88x44: 81, t3x45: 3, t77x45: 81, t88x45: 81, t3x46: 3, t77x46: 81, t88x46: 81, t2x47: 3, t77x47: 81, t88x47: 81, t1x48: 3, t2x48: 3, t77x48: 81, t89x48: 81, t1x49: 3, t2x49: 3, t77x49: 81, t89x49: 81, t2x50: 3, t76x50: 81, t89x50: 81, t2x51: 3, t76x51: 81, t89x51: 81, t3x52: 3, t76x52: 81, t89x52: 81, t3x53: 3, t33x53: 1, t34x53: 1, t35x53: 1, t36x53: 1, t37x53: 1, t76x53: 81, t89x53: 81, t3x54: 3, t33x54: 1, t37x54: 1, t76x54: 81, t89x54: 81, t3x55: 3, t33x55: 1, t37x55: 1, t75x55: 81, t89x55: 81, t3x56: 3, t33x56: 1, t37x56: 1, t75x56: 81, t89x56: 81, t3x57: 3, t33x57: 1, t34x57: 1, t36x57: 1, t37x57: 1, t74x57: 81, t89x57: 81, t3x58: 3, t33x58: 1, t34x58: 1, t36x58: 1, t37x58: 1, t74x58: 81, t89x58: 81, t4x59: 3, t74x59: 81, t89x59: 81, t90x59: 81, t4x60: 3, t5x60: 3, t73x60: 81, t74x60: 81, t90x60: 81, t5x61: 3, t73x61: 81, t90x61: 81, t5x62: 3, t73x62: 81, t90x62: 81, t5x63: 3, t73x63: 81, t90x63: 81, t5x64: 3, t6x64: 3, t73x64: 81, t90x64: 81, t6x65: 3, t73x65: 81, t90x65: 81, t7x66: 3, t73x66: 81, t89x66: 81, t90x66: 81, t7x67: 3, t72x67: 81, t89x67: 81, t7x68: 3, t72x68: 81, t88x68: 81, t89x68: 81, t7x69: 3, t71x69: 81, t72x69: 81, t88x69: 81, t7x70: 3, t67x70: 81, t68x70: 81, t69x70: 81, t70x70: 81, t71x70: 81, t87x70: 81, t88x70: 81, t7x71: 3, t62x71: 81, t63x71: 81, t64x71: 81, t65x71: 81, t66x71: 81, t87x71: 81, t6x72: 3, t7x72: 3, t52x72: 81, t53x72: 81, t54x72: 81, t55x72: 81, t56x72: 81, t57x72: 81, t58x72: 81, t59x72: 81, t60x72: 81, t61x72: 81, t87x72: 81, t4x73: 3, t5x73: 3, t6x73: 3, t40x73: 81, t41x73: 81, t42x73: 81, t43x73: 81, t44x73: 81, t45x73: 81, t46x73: 81, t47x73: 81, t48x73: 81, t49x73: 81, t50x73: 81, t51x73: 81, t87x73: 81, t0x74: 3, t1x74: 3, t2x74: 3, t3x74: 3, t4x74: 3, t35x74: 81, t36x74: 81, t37x74: 81, t38x74: 81, t39x74: 81, t87x74: 81, t0x75: 3, t26x75: 81, t27x75: 81, t28x75: 81, t29x75: 81, t30x75: 81, t31x75: 81, t32x75: 81, t33x75: 81, t34x75: 81, t86x75: 81, t87x75: 81, t0x76: 81, t1x76: 81, t2x76: 81, t3x76: 81, t4x76: 81, t5x76: 81, t10x76: 81, t11x76: 81, t12x76: 81, t13x76: 81, t14x76: 81, t15x76: 81, t16x76: 81, t17x76: 81, t18x76: 81, t19x76: 81, t20x76: 81, t21x76: 81, t22x76: 81, t23x76: 81, t24x76: 81, t25x76: 81, t86x76: 81, t6x77: 81, t7x77: 81, t8x77: 81, t9x77: 81, t10x77: 81, t86x77: 81, t49x78: 81, t50x78: 81, t51x78: 81, t52x78: 81, t53x78: 81, t54x78: 81, t55x78: 81, t56x78: 81, t57x78: 81, t58x78: 81, t59x78: 81, t85x78: 81, t47x79: 81, t48x79: 81, t49x79: 81, t59x79: 81, t60x79: 81, t61x79: 81, t62x79: 81, t63x79: 81, t64x79: 81, t85x79: 81, t45x80: 81, t46x80: 81, t65x80: 81, t66x80: 81, t84x80: 81, t29x81: 81, t30x81: 81, t31x81: 81, t32x81: 81, t33x81: 81, t41x81: 81, t42x81: 81, t43x81: 81, t44x81: 81, t67x81: 81, t68x81: 81, t69x81: 81, t83x81: 81, t84x81: 81, t0x82: 81, t1x82: 81, t2x82: 81, t3x82: 81, t4x82: 81, t5x82: 81, t6x82: 81, t7x82: 81, t8x82: 81, t9x82: 81, t10x82: 81, t11x82: 81, t12x82: 81, t13x82: 81, t14x82: 81, t15x82: 81, t16x82: 81, t17x82: 81, t18x82: 81, t19x82: 81, t20x82: 81, t21x82: 81, t22x82: 81, t23x82: 81, t24x82: 81, t25x82: 81, t26x82: 81, t27x82: 81, t28x82: 81, t34x82: 81, t35x82: 81, t36x82: 81, t37x82: 81, t38x82: 81, t39x82: 81, t40x82: 81, t70x82: 81, t71x82: 81, t72x82: 81, t82x82: 81, t72x83: 81, t73x83: 81, t74x83: 81, t81x83: 81, t82x83: 81, t74x84: 81, t75x84: 81, t76x84: 81, t77x84: 81, t78x84: 81, t79x84: 81, t80x84: 81
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

					if(newPos[0] === 65 && newPos[1] === 4) {
						newPos = [94,91];
						sfx = "warp";
					}
					else if(newPos[0] === 90 && newPos[1] === 88) {
						newPos = [65,5];
						sfx = "warp";
					}
					else if(newPos[0] === 35 && newPos[1] === 56) {
						newPos = [129,13];
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