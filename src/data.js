export const grammarData = [
  {
    id: 'te-form',
    title: 'THỂ TE (V-て)',
    rules: [
      {
        structure: 'V-て + ください',
        meaning: 'Hãy làm... (Yêu cầu, nhờ vả).',
        example: 'まって ください (Hãy đợi).',
      },
      {
        structure: 'V-て + います',
        meaning: 'Đang làm... (Hành động đang diễn ra, trạng thái, hoặc thói quen).',
        example: 'ごはんを たべて います (Tôi đang ăn cơm).',
      },
      {
        structure: 'V-て + もいいですか',
        meaning: 'Làm... có được không? (Xin phép).',
        example: 'しゃしんを とって もいいですか (Tôi chụp ảnh có được không?).',
      },
      {
        structure: 'V-て + はいけません',
        meaning: 'Không được phép làm... (Cấm đoán).',
        example: 'ここで たばこを すって はいけません (Không được hút thuốc ở đây).',
      },
      {
        structure: 'V1-て、V2-て、V3...',
        meaning: 'Làm V1, rồi làm V2... (Nối các hành động theo thứ tự).',
        example: 'おきて、あさごはんを たべて、がっこうへ いきます (Tôi thức dậy, ăn sáng, rồi đến trường).',
      },
      {
        structure: 'V1-て + から、V2',
        meaning: 'Sau khi làm V1 thì làm V2.',
        example: 'てを あらって から、ごはんを たべます (Sau khi rửa tay thì tôi ăn cơm).',
      },
      {
        structure: 'V-て + あげます / もらいます / くれます',
        meaning: 'Làm gì cho ai / Được ai làm cho / (Ai đó) làm gì cho mình.',
        example: 'ともだちに ほんを かして あげます (Tôi cho bạn mượn sách).',
      }
    ]
  },
  {
    id: 'nai-form',
    title: 'THỂ NAI (V-ない)',
    rules: [
      {
        structure: 'V-ない + でください',
        meaning: 'Xin đừng làm...',
        example: 'わすれない でください (Xin đừng quên).',
      },
      {
        structure: 'V-ない (bỏ i) + ければなりません',
        meaning: 'Phải làm... (Bắt buộc).',
        example: 'くすりを のまなければなりません (Phải uống thuốc).',
      },
      {
        structure: 'V-ない (bỏ i) + くてもいいです',
        meaning: 'Không làm... cũng được.',
        example: 'あした こなくてもいいです (Ngày mai không đến cũng được).',
      }
    ]
  },
  {
    id: 'dictionary-form',
    title: 'THỂ TỪ ĐIỂN (V-る)',
    rules: [
      {
        structure: 'V-る + ことができます',
        meaning: 'Có thể làm... (Năng lực, khả năng).',
        example: 'にほんごを はなす ことができます (Tôi có thể nói tiếng Nhật).',
      },
      {
        structure: 'V-る + ことです',
        meaning: 'Sở thích là làm... (Danh từ hóa động từ).',
        example: 'しゅみは ほんを よむ ことです (Sở thích của tôi là đọc sách).',
      },
      {
        structure: 'V-る + まえに、~',
        meaning: 'Trước khi làm... thì ~',
        example: 'ねる まえに、ほんを よみます (Trước khi ngủ, tôi đọc sách).',
      },
      {
        structure: 'V-る + と、~',
        meaning: 'Hễ làm / Nếu làm... thì ~ (Điều kiện tất yếu).',
        example: 'この ボタンを おす と、おつりが でます (Hễ bấm nút này, tiền thừa sẽ ra).',
      }
    ]
  },
  {
    id: 'ta-form',
    title: 'THỂ TA (V-た)',
    rules: [
      {
        structure: 'V-た + ことがあります',
        meaning: 'Đã từng làm... (Kinh nghiệm).',
        example: 'にほんへ いった ことがあります (Tôi đã từng đi Nhật).',
      },
      {
        structure: 'V-た + り、V-た + りします',
        meaning: 'Nào là làm V1, nào là làm V2... (Liệt kê hành động).',
        example: 'にちようびは えいがを みた り、ほんを よんだ りします (Chủ nhật tôi nào là xem phim, nào là đọc sách).',
      },
      {
        structure: 'V-た + ら、~',
        meaning: 'Nếu / Sau khi làm... thì ~ (Điều kiện giả định).',
        example: 'あめが ふった ら、いきません (Nếu trời mưa thì tôi sẽ không đi).',
      }
    ]
  },
  {
    id: 'plain-form',
    title: 'THỂ THÔNG THƯỜNG (Thể ngắn)',
    rules: [
      {
        structure: 'Thể thông thường + と おもいます',
        meaning: 'Tôi nghĩ rằng...',
        example: 'あした あめが ふる と おもいます (Tôi nghĩ rằng mai trời sẽ mưa).',
      },
      {
        structure: 'Thể thông thường + と いいました',
        meaning: '(Ai đó) đã nói rằng...',
        example: 'ミラーさんは らいしゅう とうきょうへ いく と いいました (Anh Miller đã nói là tuần sau sẽ đi Tokyo).',
      },
      {
        structure: 'Thể thông thường + Danh từ',
        meaning: 'Mệnh đề bổ nghĩa cho danh từ.',
        example: 'わたしが かった ほん (Cuốn sách mà tôi đã mua).',
      },
      {
        structure: 'Thể thông thường + とき',
        meaning: 'Khi / Trong khi...',
        example: 'じかんが ない とき、あさごはんを たべません (Khi không có thời gian, tôi không ăn sáng).',
      },
      {
        structure: 'V-ても',
        meaning: 'Cho dù... (chia giống thể Te)',
        example: 'あめが ふっても - Cho dù trời mưa',
      }
    ]
  }
];
