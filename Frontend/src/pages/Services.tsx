import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { X, Star, Clock, Users } from "lucide-react";
import { Plus, Minus } from "lucide-react";

const serviceGalleries: Record<string, string[]> = {
  birthday: [
    "https://images.pexels.com/photos/2072181/pexels-photo-2072181.jpeg",
    "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg",
    "https://images.pexels.com/photos/1373916/pexels-photo-1373916.jpeg",
    "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg",
    "https://images.pexels.com/photos/2072182/pexels-photo-2072182.jpeg",
    "https://images.pexels.com/photos/2072183/pexels-photo-2072183.jpeg",
    "https://images.pexels.com/photos/2072184/pexels-photo-2072184.jpeg",
    "https://images.pexels.com/photos/2072185/pexels-photo-2072185.jpeg",
    "https://images.pexels.com/photos/2072186/pexels-photo-2072186.jpeg",
    "https://images.pexels.com/photos/2072187/pexels-photo-2072187.jpeg",
    "https://images.pexels.com/photos/2072188/pexels-photo-2072188.jpeg",
    "https://images.pexels.com/photos/2072189/pexels-photo-2072189.jpeg",
    "https://images.pexels.com/photos/2072190/pexels-photo-2072190.jpeg",
    "https://images.pexels.com/photos/2072191/pexels-photo-2072191.jpeg",
    "https://images.pexels.com/photos/2072192/pexels-photo-2072192.jpeg",
    "https://images.pexels.com/photos/2072193/pexels-photo-2072193.jpeg",
    "https://images.pexels.com/photos/2072194/pexels-photo-2072194.jpeg",
    "https://images.pexels.com/photos/2072195/pexels-photo-2072195.jpeg",
    "https://images.pexels.com/photos/2072196/pexels-photo-2072196.jpeg",
    "https://images.pexels.com/photos/2072197/pexels-photo-2072197.jpeg",
    "https://images.pexels.com/photos/2072198/pexels-photo-2072198.jpeg",
    "https://images.pexels.com/photos/2072199/pexels-photo-2072199.jpeg",
    "https://images.pexels.com/photos/2072200/pexels-photo-2072200.jpeg",
    "https://images.pexels.com/photos/2072201/pexels-photo-2072201.jpeg",
    "https://images.pexels.com/photos/2072202/pexels-photo-2072202.jpeg",
    "https://images.pexels.com/photos/2072203/pexels-photo-2072203.jpeg",
    "https://images.pexels.com/photos/2072204/pexels-photo-2072204.jpeg",
    "https://images.pexels.com/photos/2072205/pexels-photo-2072205.jpeg",
    "https://images.pexels.com/photos/2072206/pexels-photo-2072206.jpeg",
    "https://images.pexels.com/photos/2072207/pexels-photo-2072207.jpeg",
  ],
  babyshower: [
    "https://images.pexels.com/photos/3770580/pexels-photo-3770580.jpeg",
    "https://images.pexels.com/photos/3770581/pexels-photo-3770581.jpeg",
    "https://images.pexels.com/photos/3770582/pexels-photo-3770582.jpeg",
    "https://images.pexels.com/photos/3770583/pexels-photo-3770583.jpeg",
    "https://images.pexels.com/photos/3770584/pexels-photo-3770584.jpeg",
    "https://images.pexels.com/photos/3770585/pexels-photo-3770585.jpeg",
    "https://images.pexels.com/photos/3770586/pexels-photo-3770586.jpeg",
    "https://images.pexels.com/photos/3770587/pexels-photo-3770587.jpeg",
    "https://images.pexels.com/photos/3770588/pexels-photo-3770588.jpeg",
    "https://images.pexels.com/photos/3770589/pexels-photo-3770589.jpeg",
    "https://images.pexels.com/photos/3770590/pexels-photo-3770590.jpeg",
    "https://images.pexels.com/photos/3770591/pexels-photo-3770591.jpeg",
    "https://images.pexels.com/photos/3770592/pexels-photo-3770592.jpeg",
    "https://images.pexels.com/photos/3770593/pexels-photo-3770593.jpeg",
    "https://images.pexels.com/photos/3770594/pexels-photo-3770594.jpeg",
    "https://images.pexels.com/photos/3770595/pexels-photo-3770595.jpeg",
    "https://images.pexels.com/photos/3770596/pexels-photo-3770596.jpeg",
    "https://images.pexels.com/photos/3770597/pexels-photo-3770597.jpeg",
    "https://images.pexels.com/photos/3770598/pexels-photo-3770598.jpeg",
    "https://images.pexels.com/photos/3770599/pexels-photo-3770599.jpeg",
    "https://images.pexels.com/photos/3770600/pexels-photo-3770600.jpeg",
    "https://images.pexels.com/photos/3770601/pexels-photo-3770601.jpeg",
    "https://images.pexels.com/photos/3770602/pexels-photo-3770602.jpeg",
    "https://images.pexels.com/photos/3770603/pexels-photo-3770603.jpeg",
    "https://images.pexels.com/photos/3770604/pexels-photo-3770604.jpeg",
    "https://images.pexels.com/photos/3770605/pexels-photo-3770605.jpeg",
    "https://images.pexels.com/photos/3770606/pexels-photo-3770606.jpeg",
    "https://images.pexels.com/photos/3770607/pexels-photo-3770607.jpeg",
    "https://images.pexels.com/photos/3770608/pexels-photo-3770608.jpeg",
    "https://images.pexels.com/photos/3770609/pexels-photo-3770609.jpeg",
  ],
  anniversary: [
    "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
    "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg",
    "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg",
    "https://images.pexels.com/photos/1024994/pexels-photo-1024994.jpeg",
    "https://images.pexels.com/photos/1024995/pexels-photo-1024995.jpeg",
    "https://images.pexels.com/photos/1024996/pexels-photo-1024996.jpeg",
    "https://images.pexels.com/photos/1024997/pexels-photo-1024997.jpeg",
    "https://images.pexels.com/photos/1024998/pexels-photo-1024998.jpeg",
    "https://images.pexels.com/photos/1024999/pexels-photo-1024999.jpeg",
    "https://images.pexels.com/photos/1025000/pexels-photo-1025000.jpeg",
    "https://images.pexels.com/photos/1025001/pexels-photo-1025001.jpeg",
    "https://images.pexels.com/photos/1025002/pexels-photo-1025002.jpeg",
    "https://images.pexels.com/photos/1025003/pexels-photo-1025003.jpeg",
    "https://images.pexels.com/photos/1025004/pexels-photo-1025004.jpeg",
    "https://images.pexels.com/photos/1025005/pexels-photo-1025005.jpeg",
    "https://images.pexels.com/photos/1025006/pexels-photo-1025006.jpeg",
    "https://images.pexels.com/photos/1025007/pexels-photo-1025007.jpeg",
    "https://images.pexels.com/photos/1025008/pexels-photo-1025008.jpeg",
    "https://images.pexels.com/photos/1025009/pexels-photo-1025009.jpeg",
    "https://images.pexels.com/photos/1025010/pexels-photo-1025010.jpeg",
    "https://images.pexels.com/photos/1025011/pexels-photo-1025011.jpeg",
    "https://images.pexels.com/photos/1025012/pexels-photo-1025012.jpeg",
    "https://images.pexels.com/photos/1025013/pexels-photo-1025013.jpeg",
    "https://images.pexels.com/photos/1025014/pexels-photo-1025014.jpeg",
    "https://images.pexels.com/photos/1025015/pexels-photo-1025015.jpeg",
    "https://images.pexels.com/photos/1025016/pexels-photo-1025016.jpeg",
    "https://images.pexels.com/photos/1025017/pexels-photo-1025017.jpeg",
    "https://images.pexels.com/photos/1025018/pexels-photo-1025018.jpeg",
    "https://images.pexels.com/photos/1025019/pexels-photo-1025019.jpeg",
    "https://images.pexels.com/photos/1025020/pexels-photo-1025020.jpeg",
  ],
  naming: [
    "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg",
    "https://images.pexels.com/photos/8088496/pexels-photo-8088496.jpeg",
    "https://images.pexels.com/photos/8088497/pexels-photo-8088497.jpeg",
    "https://images.pexels.com/photos/8088498/pexels-photo-8088498.jpeg",
    "https://images.pexels.com/photos/8088499/pexels-photo-8088499.jpeg",
    "https://images.pexels.com/photos/8088500/pexels-photo-8088500.jpeg",
    "https://images.pexels.com/photos/8088501/pexels-photo-8088501.jpeg",
    "https://images.pexels.com/photos/8088502/pexels-photo-8088502.jpeg",
    "https://images.pexels.com/photos/8088503/pexels-photo-8088503.jpeg",
    "https://images.pexels.com/photos/8088504/pexels-photo-8088504.jpeg",
    "https://images.pexels.com/photos/8088505/pexels-photo-8088505.jpeg",
    "https://images.pexels.com/photos/8088506/pexels-photo-8088506.jpeg",
    "https://images.pexels.com/photos/8088507/pexels-photo-8088507.jpeg",
    "https://images.pexels.com/photos/8088508/pexels-photo-8088508.jpeg",
    "https://images.pexels.com/photos/8088509/pexels-photo-8088509.jpeg",
    "https://images.pexels.com/photos/8088510/pexels-photo-8088510.jpeg",
    "https://images.pexels.com/photos/8088511/pexels-photo-8088511.jpeg",
    "https://images.pexels.com/photos/8088512/pexels-photo-8088512.jpeg",
    "https://images.pexels.com/photos/8088513/pexels-photo-8088513.jpeg",
    "https://images.pexels.com/photos/8088514/pexels-photo-8088514.jpeg",
    "https://images.pexels.com/photos/8088515/pexels-photo-8088515.jpeg",
    "https://images.pexels.com/photos/8088516/pexels-photo-8088516.jpeg",
    "https://images.pexels.com/photos/8088517/pexels-photo-8088517.jpeg",
    "https://images.pexels.com/photos/8088518/pexels-photo-8088518.jpeg",
    "https://images.pexels.com/photos/8088519/pexels-photo-8088519.jpeg",
    "https://images.pexels.com/photos/8088520/pexels-photo-8088520.jpeg",
    "https://images.pexels.com/photos/8088521/pexels-photo-8088521.jpeg",
    "https://images.pexels.com/photos/8088522/pexels-photo-8088522.jpeg",
    "https://images.pexels.com/photos/8088523/pexels-photo-8088523.jpeg",
    "https://images.pexels.com/photos/8088524/pexels-photo-8088524.jpeg",
  ],
  bride: [
    "https://images.pexels.com/photos/6994991/pexels-photo-6994991.jpeg",
    "https://images.pexels.com/photos/6994992/pexels-photo-6994992.jpeg",
    "https://images.pexels.com/photos/6994993/pexels-photo-6994993.jpeg",
    "https://images.pexels.com/photos/6994994/pexels-photo-6994994.jpeg",
    "https://images.pexels.com/photos/6994995/pexels-photo-6994995.jpeg",
    "https://images.pexels.com/photos/6994996/pexels-photo-6994996.jpeg",
    "https://images.pexels.com/photos/6994997/pexels-photo-6994997.jpeg",
    "https://images.pexels.com/photos/6994998/pexels-photo-6994998.jpeg",
    "https://images.pexels.com/photos/6994999/pexels-photo-6994999.jpeg",
    "https://images.pexels.com/photos/6995000/pexels-photo-6995000.jpeg",
    "https://images.pexels.com/photos/6995001/pexels-photo-6995001.jpeg",
    "https://images.pexels.com/photos/6995002/pexels-photo-6995002.jpeg",
    "https://images.pexels.com/photos/6995003/pexels-photo-6995003.jpeg",
    "https://images.pexels.com/photos/6995004/pexels-photo-6995004.jpeg",
    "https://images.pexels.com/photos/6995005/pexels-photo-6995005.jpeg",
    "https://images.pexels.com/photos/6995006/pexels-photo-6995006.jpeg",
    "https://images.pexels.com/photos/6995007/pexels-photo-6995007.jpeg",
    "https://images.pexels.com/photos/6995008/pexels-photo-6995008.jpeg",
    "https://images.pexels.com/photos/6995009/pexels-photo-6995009.jpeg",
    "https://images.pexels.com/photos/6995010/pexels-photo-6995010.jpeg",
    "https://images.pexels.com/photos/6995011/pexels-photo-6995011.jpeg",
    "https://images.pexels.com/photos/6995012/pexels-photo-6995012.jpeg",
    "https://images.pexels.com/photos/6995013/pexels-photo-6995013.jpeg",
    "https://images.pexels.com/photos/6995014/pexels-photo-6995014.jpeg",
    "https://images.pexels.com/photos/6995015/pexels-photo-6995015.jpeg",
    "https://images.pexels.com/photos/6995016/pexels-photo-6995016.jpeg",
    "https://images.pexels.com/photos/6995017/pexels-photo-6995017.jpeg",
    "https://images.pexels.com/photos/6995018/pexels-photo-6995018.jpeg",
    "https://images.pexels.com/photos/6995019/pexels-photo-6995019.jpeg",
    "https://images.pexels.com/photos/6995020/pexels-photo-6995020.jpeg",
  ],
  office: [
    "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg",
    "https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg",
    "https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg",
    "https://images.pexels.com/photos/3184422/pexels-photo-3184422.jpeg",
    "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg",
    "https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg",
    "https://images.pexels.com/photos/3184425/pexels-photo-3184425.jpeg",
    "https://images.pexels.com/photos/3184426/pexels-photo-3184426.jpeg",
    "https://images.pexels.com/photos/3184427/pexels-photo-3184427.jpeg",
    "https://images.pexels.com/photos/3184428/pexels-photo-3184428.jpeg",
    "https://images.pexels.com/photos/3184429/pexels-photo-3184429.jpeg",
    "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg",
    "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg",
    "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg",
    "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg",
    "https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg",
    "https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg",
    "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg",
    "https://images.pexels.com/photos/3184437/pexels-photo-3184437.jpeg",
    "https://images.pexels.com/photos/3184438/pexels-photo-3184438.jpeg",
    "https://images.pexels.com/photos/3184439/pexels-photo-3184439.jpeg",
    "https://images.pexels.com/photos/3184440/pexels-photo-3184440.jpeg",
    "https://images.pexels.com/photos/3184441/pexels-photo-3184441.jpeg",
    "https://images.pexels.com/photos/3184442/pexels-photo-3184442.jpeg",
    "https://images.pexels.com/photos/3184443/pexels-photo-3184443.jpeg",
    "https://images.pexels.com/photos/3184444/pexels-photo-3184444.jpeg",
    "https://images.pexels.com/photos/3184445/pexels-photo-3184445.jpeg",
    "https://images.pexels.com/photos/3184446/pexels-photo-3184446.jpeg",
    "https://images.pexels.com/photos/3184447/pexels-photo-3184447.jpeg",
  ],
  housewarming: [
    "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
    "https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg",
    "https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg",
    "https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg",
    "https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg",
    "https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg",
    "https://images.pexels.com/photos/1190304/pexels-photo-1190304.jpeg",
    "https://images.pexels.com/photos/1190305/pexels-photo-1190305.jpeg",
    "https://images.pexels.com/photos/1190306/pexels-photo-1190306.jpeg",
    "https://images.pexels.com/photos/1190307/pexels-photo-1190307.jpeg",
    "https://images.pexels.com/photos/1190308/pexels-photo-1190308.jpeg",
    "https://images.pexels.com/photos/1190309/pexels-photo-1190309.jpeg",
    "https://images.pexels.com/photos/1190310/pexels-photo-1190310.jpeg",
    "https://images.pexels.com/photos/1190311/pexels-photo-1190311.jpeg",
    "https://images.pexels.com/photos/1190312/pexels-photo-1190312.jpeg",
    "https://images.pexels.com/photos/1190313/pexels-photo-1190313.jpeg",
    "https://images.pexels.com/photos/1190314/pexels-photo-1190314.jpeg",
    "https://images.pexels.com/photos/1190315/pexels-photo-1190315.jpeg",
    "https://images.pexels.com/photos/1190316/pexels-photo-1190316.jpeg",
    "https://images.pexels.com/photos/1190317/pexels-photo-1190317.jpeg",
    "https://images.pexels.com/photos/1190318/pexels-photo-1190318.jpeg",
    "https://images.pexels.com/photos/1190319/pexels-photo-1190319.jpeg",
    "https://images.pexels.com/photos/1190320/pexels-photo-1190320.jpeg",
    "https://images.pexels.com/photos/1190321/pexels-photo-1190321.jpeg",
    "https://images.pexels.com/photos/1190322/pexels-photo-1190322.jpeg",
    "https://images.pexels.com/photos/1190323/pexels-photo-1190323.jpeg",
    "https://images.pexels.com/photos/1190324/pexels-photo-1190324.jpeg",
    "https://images.pexels.com/photos/1190325/pexels-photo-1190325.jpeg",
    "https://images.pexels.com/photos/1190326/pexels-photo-1190326.jpeg",
    "https://images.pexels.com/photos/1190327/pexels-photo-1190327.jpeg",
  ],
  retirement: [
    "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
    "https://images.pexels.com/photos/1024994/pexels-photo-1024994.jpeg",
    "https://images.pexels.com/photos/1024995/pexels-photo-1024995.jpeg",
    "https://images.pexels.com/photos/1024996/pexels-photo-1024996.jpeg",
    "https://images.pexels.com/photos/1024997/pexels-photo-1024997.jpeg",
    "https://images.pexels.com/photos/1024998/pexels-photo-1024998.jpeg",
    "https://images.pexels.com/photos/1024999/pexels-photo-1024999.jpeg",
    "https://images.pexels.com/photos/1025000/pexels-photo-1025000.jpeg",
    "https://images.pexels.com/photos/1025001/pexels-photo-1025001.jpeg",
    "https://images.pexels.com/photos/1025002/pexels-photo-1025002.jpeg",
    "https://images.pexels.com/photos/1025003/pexels-photo-1025003.jpeg",
    "https://images.pexels.com/photos/1025004/pexels-photo-1025004.jpeg",
    "https://images.pexels.com/photos/1025005/pexels-photo-1025005.jpeg",
    "https://images.pexels.com/photos/1025006/pexels-photo-1025006.jpeg",
    "https://images.pexels.com/photos/1025007/pexels-photo-1025007.jpeg",
    "https://images.pexels.com/photos/1025008/pexels-photo-1025008.jpeg",
    "https://images.pexels.com/photos/1025009/pexels-photo-1025009.jpeg",
    "https://images.pexels.com/photos/1025010/pexels-photo-1025010.jpeg",
    "https://images.pexels.com/photos/1025011/pexels-photo-1025011.jpeg",
    "https://images.pexels.com/photos/1025012/pexels-photo-1025012.jpeg",
    "https://images.pexels.com/photos/1025013/pexels-photo-1025013.jpeg",
    "https://images.pexels.com/photos/1025014/pexels-photo-1025014.jpeg",
    "https://images.pexels.com/photos/1025015/pexels-photo-1025015.jpeg",
    "https://images.pexels.com/photos/1025016/pexels-photo-1025016.jpeg",
    "https://images.pexels.com/photos/1025017/pexels-photo-1025017.jpeg",
    "https://images.pexels.com/photos/1025018/pexels-photo-1025018.jpeg",
    "https://images.pexels.com/photos/1025019/pexels-photo-1025019.jpeg",
    "https://images.pexels.com/photos/1025020/pexels-photo-1025020.jpeg",
    "https://images.pexels.com/photos/1025021/pexels-photo-1025021.jpeg",
    "https://images.pexels.com/photos/1025022/pexels-photo-1025022.jpeg",
  ],
  graduation: [
    "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
    "https://images.pexels.com/photos/267886/pexels-photo-267886.jpeg",
    "https://images.pexels.com/photos/267887/pexels-photo-267887.jpeg",
    "https://images.pexels.com/photos/267888/pexels-photo-267888.jpeg",
    "https://images.pexels.com/photos/267889/pexels-photo-267889.jpeg",
    "https://images.pexels.com/photos/267890/pexels-photo-267890.jpeg",
    "https://images.pexels.com/photos/267891/pexels-photo-267891.jpeg",
    "https://images.pexels.com/photos/267892/pexels-photo-267892.jpeg",
    "https://images.pexels.com/photos/267893/pexels-photo-267893.jpeg",
    "https://images.pexels.com/photos/267894/pexels-photo-267894.jpeg",
    "https://images.pexels.com/photos/267895/pexels-photo-267895.jpeg",
    "https://images.pexels.com/photos/267896/pexels-photo-267896.jpeg",
    "https://images.pexels.com/photos/267897/pexels-photo-267897.jpeg",
    "https://images.pexels.com/photos/267898/pexels-photo-267898.jpeg",
    "https://images.pexels.com/photos/267899/pexels-photo-267899.jpeg",
    "https://images.pexels.com/photos/267900/pexels-photo-267900.jpeg",
    "https://images.pexels.com/photos/267901/pexels-photo-267901.jpeg",
    "https://images.pexels.com/photos/267902/pexels-photo-267902.jpeg",
    "https://images.pexels.com/photos/267903/pexels-photo-267903.jpeg",
    "https://images.pexels.com/photos/267904/pexels-photo-267904.jpeg",
    "https://images.pexels.com/photos/267905/pexels-photo-267905.jpeg",
    "https://images.pexels.com/photos/267906/pexels-photo-267906.jpeg",
    "https://images.pexels.com/photos/267907/pexels-photo-267907.jpeg",
    "https://images.pexels.com/photos/267908/pexels-photo-267908.jpeg",
    "https://images.pexels.com/photos/267909/pexels-photo-267909.jpeg",
    "https://images.pexels.com/photos/267910/pexels-photo-267910.jpeg",
    "https://images.pexels.com/photos/267911/pexels-photo-267911.jpeg",
    "https://images.pexels.com/photos/267912/pexels-photo-267912.jpeg",
    "https://images.pexels.com/photos/267913/pexels-photo-267913.jpeg",
  ],
};

const generateGalleryPricing = () =>
  Array.from({ length: 30 }, (_, i) => `₹${500 + i * 50}`);

const services = [
  {
    id: 1,
    name: "Birthday Party",
    image:
      "https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Celebrate another year of life with joy, laughter, and unforgettable memories.",
    pricing: "Starting from ₹500",
    gallery: serviceGalleries.birthday,
    galleryPricing: Array.from({ length: 30 }, (_, i) => `₹${500 + i * 50}`),
  },
  {
    id: 2,
    name: "Baby Shower Event",
    image:
      "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Welcome the newest family member with a beautiful and memorable celebration.",
    pricing: "Starting from ₹500",
    gallery: serviceGalleries.babyshower,
    galleryPricing: Array.from({ length: 30 }, (_, i) => `₹${500 + i * 50}`),
  },
  {
    id: 3,
    name: "Anniversary Celebration",
    image:
      "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Honor your love story with an elegant celebration of your journey together.",
    pricing: "Starting from ₹500",
    gallery: serviceGalleries.anniversary,
    galleryPricing: Array.from({ length: 30 }, (_, i) => `₹${500 + i * 50}`),
  },
  {
    id: 4,
    name: "Naming Ceremony",
    image:
      "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Celebrate the blessing of your child's name with a sacred and joyful ceremony.",
    pricing: "Starting from ₹500",
    gallery: serviceGalleries.naming,
    galleryPricing: Array.from({ length: 30 }, (_, i) => `₹${500 + i * 50}`),
  },
  {
    id: 5,
    name: "Bride-To-Be Party",
    image:
      "https://images.pexels.com/photos/6994991/pexels-photo-6994991.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Celebrate the bride-to-be with an unforgettable pre-wedding celebration.",
    pricing: "Starting from ₹500",
    gallery: serviceGalleries.bride,
    galleryPricing: Array.from({ length: 30 }, (_, i) => `₹${500 + i * 50}`),
  },
  {
    id: 6,
    name: "Office Inauguration",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Mark your business milestone with a professional and memorable inauguration.",
    pricing: "Starting from ₹500",
    gallery: serviceGalleries.office,
    galleryPricing: Array.from({ length: 30 }, (_, i) => `₹${500 + i * 50}`),
  },
  {
    id: 7,
    name: "House Warming Ceremony",
    image:
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Bless your new home with a warm and welcoming celebration.",
    pricing: "Starting from ₹500",
    gallery: serviceGalleries.housewarming,
    galleryPricing: Array.from({ length: 30 }, (_, i) => `₹${500 + i * 50}`),
  },
  {
    id: 8,
    name: "Retirement Party",
    image:
      "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Honor a lifetime of dedication with a memorable retirement celebration.",
    pricing: "Starting from ₹500",
    gallery: serviceGalleries.retirement,
    galleryPricing: Array.from({ length: 30 }, (_, i) => `₹${500 + i * 50}`),
  },
  {
    id: 9,
    name: "Graduation Celebration",
    image:
      "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Celebrate academic achievements with pride and joy.",
    pricing: "Starting from ₹500",
    gallery: serviceGalleries.graduation,
    galleryPricing: Array.from({ length: 30 }, (_, i) => `₹${500 + i * 50}`),
  },
];

// const packages = [
//   {
//     name: "Essential Package",
//     price: "₹500 - ₹1,000",
//     description: "Perfect for intimate gatherings and smaller celebrations",
//     features: [
//       "Basic decoration and styling",
//       "Event coordination on the day",
//       "Photography (2 hours)",
//       "Basic catering coordination",
//       "Setup and cleanup",
//     ],
//     popular: false,
//   },
//   {
//     name: "Premium Package",
//     price: "₹1,000 - ₹2,500",
//     description: "Comprehensive planning for memorable celebrations",
//     features: [
//       "Custom theme and decoration",
//       "Full event planning and coordination",
//       "Professional photography (4 hours)",
//       "Entertainment coordination",
//       "Premium catering options",
//       "Guest coordination",
//       "Setup and cleanup",
//     ],
//     popular: true,
//   },
//   {
//     name: "Luxury Package",
//     price: "₹2,500+",
//     description: "Ultimate luxury experience with premium services",
//     features: [
//       "Bespoke event design and styling",
//       "Complete event management",
//       "Professional photography & videography",
//       "Live entertainment coordination",
//       "Gourmet catering and bar service",
//       "VIP guest management",
//       "Luxury transportation coordination",
//       "Complete setup and cleanup",
//       "Post-event follow-up",
//     ],
//     popular: false,
//   },
// ];

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | undefined>(
    undefined
  );

  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [servicesRef, servicesInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const navigate = useNavigate();

  const handleBookService = (
    serviceName: string,
    price = "",
    imageUrl = ""
  ) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/contact", {
      state: {
        selectedService: serviceName,
        selectedPrice: price,
        selectedImage: imageUrl, // ✅ image now correctly passed
      },
    });
  };

  const faqs = [
    {
      question: "How can I book a decoration service?",
      answer:
        "You can book directly through our website’s Contact or Booking page. Just fill out the form with your event details, and we’ll get back to you within 24 hours.",
    },
    {
      question: "Do you offer decoration services at home?",
      answer:
        "Yes, we provide home decoration services for various occasions like birthdays, anniversaries, baby showers, and more. Setup is done at your preferred location.",
    },
    {
      question: "Do I need to provide any materials for the decoration?",
      answer:
        "No. We bring everything required — including props, flowers, balloons, lights, and other decor essentials. If you want something custom added, let us know in advance.",
    },
    {
      question: "How do I contact Village Vacation Events for support?",
      answer:
        "You can reach out via phone at +91 9164619328 or email us at vvevents681@gmail.com. You can also message us through Instagram or the contact form on our site.",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 bg-black"
    >
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-8 font-playfair"
          >
            Our Premium <span className="gold-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8"
          >
            From intimate gatherings to grand celebrations, we specialize in
            creating unforgettable experiences for every milestone in your life
            with luxury and elegance.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 text-gray-300"
          >
            <div className="flex items-center">
              <Clock className="text-yellow-400 mr-2" size={20} />
              <span>500+ Events Completed</span>
            </div>
            <div className="flex items-center">
              <Users className="text-yellow-400 mr-2" size={20} />
              <span>1000+ Happy Clients</span>
            </div>
            <div className="flex items-center">
              <Star className="text-yellow-400 mr-2" size={20} />
              <span>5-Star Rated Service</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={servicesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
              Explore Our <span className="gold-text">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Each service is meticulously crafted to exceed your expectations
              and create lasting memories
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ y: 50, opacity: 0 }}
                animate={servicesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl premium-card hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-semibold text-white mb-3 font-playfair">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-yellow-400 font-semibold">
                      <span className="text-sm">Know More</span>
                      <Star
                        className="ml-2 group-hover:rotate-12 transition-transform duration-300"
                        size={18}
                      />
                    </div>
                    <div className="text-yellow-400 text-sm font-semibold">
                      {service.pricing}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 gold-gradient rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <Star className="text-black" size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      {/* <section
        ref={packagesRef}
        className="py-24 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={packagesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
              Service <span className="gold-text">Packages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose from our carefully crafted packages designed to meet
              different needs and budgets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ y: 50, opacity: 0 }}
                animate={packagesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`premium-card p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-500 hover:shadow-2xl relative flex flex-col h-full ${
                  pkg.popular ? "border-2 border-yellow-400" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="gold-gradient text-black px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex-grow">
                  <h3 className="text-3xl font-bold text-white mb-4 font-playfair">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold gold-text mb-6 font-playfair">
                    {pkg.price}
                  </div>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {pkg.description}
                  </p>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <Star
                          className="text-yellow-400 mr-3 flex-shrink-0 mt-1"
                          size={16}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleBookService("", pkg.name)}
                  className="premium-button w-full px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 mt-auto"
                >
                  Choose Package
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="premium-card rounded-3xl max-w-7xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  loading="lazy"
                  className="w-full h-80 object-cover"
                />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 p-3 bg-black/70 rounded-full text-white hover:bg-black/90 transition-colors border border-yellow-400/30 hover:scale-110 transition-transform duration-300"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-white font-playfair">
                    {selectedService.name}
                  </h2>
                  <div className="flex items-center gap-6 mt-4 text-gray-300">
                    <div className="flex items-center">
                      <Star className="text-yellow-400 mr-2" size={20} />
                      <span>{selectedService.pricing}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-semibold gold-text mb-6 font-playfair">
                  Choose Your Experience
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
                  {selectedService.gallery.map((img: string, idx: number) => (
                    <div
                      key={idx}
                      className="bg-black/80 rounded-xl overflow-hidden border border-yellow-400/20 flex flex-col"
                      onClick={() => setSelectedImageIdx(idx)}
                    >
                      <motion.img
                        src={img}
                        alt={`Gallery ${idx + 1}`}
                        className="w-full h-40 object-cover cursor-pointer"
                        whileHover={{ scale: 1.08 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 24,
                        }}
                      />
                      <div className="p-4 flex flex-col flex-grow">
                        <button
                          className="mt-auto premium-button w-full px-2 py-2 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105"
                          onClick={() => setSelectedImageIdx(idx)}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Detail Modal */}
      <AnimatePresence>
        {typeof selectedImageIdx === "number" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedImageIdx(undefined)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-black rounded-2xl shadow-xl max-w-3xl w-full flex flex-col md:flex-row overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-1/2 w-full flex items-center justify-center bg-black cursor-pointer">
                <motion.img
                  src={selectedService.gallery[selectedImageIdx]}
                  alt={`Gallery ${selectedImageIdx + 1}`}
                  className="object-cover w-full h-80"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                />
              </div>
              <div className="md:w-1/2 w-full p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-4 font-playfair">
                    {selectedService.name}
                  </h4>
                  <p className="text-gray-300 mb-4">
                    {/* You can customize this content as needed */}
                    Experience this special moment with our premium service
                    option.
                  </p>
                  <div className="text-lg font-semibold gold-text mb-6">
                    {selectedService.galleryPricing[selectedImageIdx]}
                  </div>
                </div>
                <button
                  className="premium-button w-full px-4 py-2 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    handleBookService(
                      selectedService.name,
                      selectedService.galleryPricing[selectedImageIdx] // 💰 pass price here
                    );
                  }}
                >
                  Book Now
                </button>
              </div>

              <button
                onClick={() => setSelectedImageIdx(undefined)}
                className="absolute top-4 right-4 p-2 bg-black/70 rounded-full text-white hover:bg-black/90 transition-colors border border-yellow-400/30"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
              Frequently Asked <span className="gold-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Got questions? We’re here to help you plan the perfect event.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-xl p-6 bg-black/80 backdrop-blur-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-lg md:text-xl text-white font-semibold font-playfair">
                    {faq.question}
                  </span>
                  <span className="text-yellow-400">
                    {openFAQ === index ? (
                      <Minus size={24} />
                    ) : (
                      <Plus size={24} />
                    )}
                  </span>
                </button>

                {openFAQ === index && (
                  <div className="mt-4 text-gray-300 text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
