var a = { b: { c: { d: 1 } } };
// var v1 = a.b.c.d
var v2 = a['b']['c']['d']

/**76-7=69
 * --- Code ---
kind = HANDLER
major_key = <NoCache>Stub
name = StoreFastElementStub
compiler = turbofan
Instructions (size = 240)
0x35e745504120     0  4c8b420f       REX.W movq r8,[rdx+0xf]
0x35e745504124     4  f6c101         testb rcx,0x1
0x35e745504127     7  0f8438000000   jz 0x35e745504165  <+0x45>
0x35e74550412d     d  4c8b49ff       REX.W movq r9,[rcx-0x1]
0x35e745504131    11  4d394d50       REX.W cmpq [r13+0x50],r9
0x35e745504135    15  0f8597000000   jnz 0x35e7455041d2  <+0xb2>
0x35e74550413b    1b  c5fb104107     vmovsd xmm0,[rcx+0x7]
0x35e745504140    20  c57b2cc8       vcvttsd2si r9,xmm0
0x35e745504144    24  c5f157c9       vxorpd xmm1,xmm1,xmm1
0x35e745504148    28  c4c1732ac9     vcvtlsi2sd xmm1,xmm1,r9
0x35e74550414d    2d  c5f92ec8       vucomisd xmm1,xmm0
0x35e745504151    31  0f8a7b000000   jpe 0x35e7455041d2  <+0xb2>
0x35e745504157    37  0f8575000000   jnz 0x35e7455041d2  <+0xb2>
0x35e74550415d    3d  4d63c9         REX.W movsxlq r9,r9
0x35e745504160    40  e907000000     jmp 0x35e74550416c  <+0x4c>
0x35e745504165    45  4c8bc9         REX.W movq r9,rcx
0x35e745504168    48  49c1f920       REX.W sarq r9, 32
0x35e74550416c    4c  a801           test al,0x1
0x35e74550416e    4e  0f842a000000   jz 0x35e74550419e  <+0x7e>
0x35e745504174    54  4c8b58ff       REX.W movq r11,[rax-0x1]
0x35e745504178    58  4d395d50       REX.W cmpq [r13+0x50],r11
0x35e74550417c    5c  0f8550000000   jnz 0x35e7455041d2  <+0xb2>
0x35e745504182    62  c5fb104007     vmovsd xmm0,[rax+0x7]
0x35e745504187    67  c461fb2cd8     vcvttsd2siq r11,xmm0
0x35e74550418c    6c  4983fb01       REX.W cmpq r11,0x1
0x35e745504190    70  0f805d000000   jo 0x35e7455041f3  <+0xd3>
0x35e745504196    76  458bdb         movl r11,r11
0x35e745504199    79  e907000000     jmp 0x35e7455041a5  <+0x85>
0x35e74550419e    7e  4c8bd8         REX.W movq r11,rax
0x35e7455041a1    81  49c1eb20       REX.W shrq r11, 32
0x35e7455041a5    85  4c8b6217       REX.W movq r12,[rdx+0x17]
0x35e7455041a9    89  41f644243708   testb [r12+0x37],0x8
0x35e7455041af    8f  0f851d000000   jnz 0x35e7455041d2  <+0xb2>
0x35e7455041b5    95  4c63623b       REX.W movsxlq r12,[rdx+0x3b]
0x35e7455041b9    99  4d39e1         REX.W cmpq r9,r12
0x35e7455041bc    9c  0f8310000000   jnc 0x35e7455041d2  <+0xb2>
0x35e7455041c2    a2  498b5817       REX.W movq rbx,[r8+0x17]
0x35e7455041c6    a6  498b500f       REX.W movq rdx,[r8+0xf]
0x35e7455041ca    aa  4803da         REX.W addq rbx,rdx
0x35e7455041cd    ad  46891c8b       movl [rbx+r9*4],r11
0x35e7455041d1    b1  c3             retl
0x35e7455041d2    b2  57             push rdi
0x35e7455041d3    b3  53             push rbx
0x35e7455041d4    b4  52             push rdx
0x35e7455041d5    b5  51             push rcx
0x35e7455041d6    b6  ff742420       push [rsp+0x20]
0x35e7455041da    ba  4889442428     REX.W movq [rsp+0x28],rax
0x35e7455041df    bf  b805000000     movl rax,0x5
0x35e7455041e4    c4  48bb00b9ed0000000000 REX.W movq rbx,0xedb900
0x35e7455041ee    ce  e9ad00e8ff     jmp 0x35e7453842a0      ;; code: STUB, CEntryStub, minor: 8
0x35e7455041f3    d3  4883ec08       REX.W subq rsp,0x8
0x35e7455041f7    d7  c5fb110424     vmovsd [rsp],xmm0
0x35e7455041fc    dc  e85ffeffff     call 0x35e745504060     ;; code: STUB, DoubleToIStub, minor: 135876
0x35e745504201    e1  4883c408       REX.W addq rsp,0x8
0x35e745504205    e5  eb8f           jmp 0x35e745504196  <+0x76>
0x35e745504207    e7  90             nop


Safepoints (size = 8)

RelocInfo (size = 4)
0x35e7455041ef  code target (STUB)  (0x35e7453842a0)
0x35e7455041fd  code target (STUB)  (0x35e745504060)

--- End code ---

 */


 /**
  * 153-84=69
  * --- Code ---
kind = HANDLER
major_key = <NoCache>Stub
name = StoreFastElementStub
compiler = turbofan
Instructions (size = 240)
0x2eca17504120     0  4c8b420f       REX.W movq r8,[rdx+0xf]
0x2eca17504124     4  f6c101         testb rcx,0x1
0x2eca17504127     7  0f8438000000   jz 0x2eca17504165  <+0x45>
0x2eca1750412d     d  4c8b49ff       REX.W movq r9,[rcx-0x1]
0x2eca17504131    11  4d394d50       REX.W cmpq [r13+0x50],r9
0x2eca17504135    15  0f8597000000   jnz 0x2eca175041d2  <+0xb2>
0x2eca1750413b    1b  c5fb104107     vmovsd xmm0,[rcx+0x7]
0x2eca17504140    20  c57b2cc8       vcvttsd2si r9,xmm0
0x2eca17504144    24  c5f157c9       vxorpd xmm1,xmm1,xmm1
0x2eca17504148    28  c4c1732ac9     vcvtlsi2sd xmm1,xmm1,r9
0x2eca1750414d    2d  c5f92ec8       vucomisd xmm1,xmm0
0x2eca17504151    31  0f8a7b000000   jpe 0x2eca175041d2  <+0xb2>
0x2eca17504157    37  0f8575000000   jnz 0x2eca175041d2  <+0xb2>
0x2eca1750415d    3d  4d63c9         REX.W movsxlq r9,r9
0x2eca17504160    40  e907000000     jmp 0x2eca1750416c  <+0x4c>
0x2eca17504165    45  4c8bc9         REX.W movq r9,rcx
0x2eca17504168    48  49c1f920       REX.W sarq r9, 32
0x2eca1750416c    4c  a801           test al,0x1
0x2eca1750416e    4e  0f842a000000   jz 0x2eca1750419e  <+0x7e>
0x2eca17504174    54  4c8b58ff       REX.W movq r11,[rax-0x1]
0x2eca17504178    58  4d395d50       REX.W cmpq [r13+0x50],r11
0x2eca1750417c    5c  0f8550000000   jnz 0x2eca175041d2  <+0xb2>
0x2eca17504182    62  c5fb104007     vmovsd xmm0,[rax+0x7]
0x2eca17504187    67  c461fb2cd8     vcvttsd2siq r11,xmm0
0x2eca1750418c    6c  4983fb01       REX.W cmpq r11,0x1
0x2eca17504190    70  0f805d000000   jo 0x2eca175041f3  <+0xd3>
0x2eca17504196    76  458bdb         movl r11,r11
0x2eca17504199    79  e907000000     jmp 0x2eca175041a5  <+0x85>
0x2eca1750419e    7e  4c8bd8         REX.W movq r11,rax
0x2eca175041a1    81  49c1eb20       REX.W shrq r11, 32
0x2eca175041a5    85  4c8b6217       REX.W movq r12,[rdx+0x17]
0x2eca175041a9    89  41f644243708   testb [r12+0x37],0x8
0x2eca175041af    8f  0f851d000000   jnz 0x2eca175041d2  <+0xb2>
0x2eca175041b5    95  4c63623b       REX.W movsxlq r12,[rdx+0x3b]
0x2eca175041b9    99  4d39e1         REX.W cmpq r9,r12
0x2eca175041bc    9c  0f8310000000   jnc 0x2eca175041d2  <+0xb2>
0x2eca175041c2    a2  498b5817       REX.W movq rbx,[r8+0x17]
0x2eca175041c6    a6  498b500f       REX.W movq rdx,[r8+0xf]
0x2eca175041ca    aa  4803da         REX.W addq rbx,rdx
0x2eca175041cd    ad  46891c8b       movl [rbx+r9*4],r11
0x2eca175041d1    b1  c3             retl
0x2eca175041d2    b2  57             push rdi
0x2eca175041d3    b3  53             push rbx
0x2eca175041d4    b4  52             push rdx
0x2eca175041d5    b5  51             push rcx
0x2eca175041d6    b6  ff742420       push [rsp+0x20]
0x2eca175041da    ba  4889442428     REX.W movq [rsp+0x28],rax
0x2eca175041df    bf  b805000000     movl rax,0x5
0x2eca175041e4    c4  48bb00b9ed0000000000 REX.W movq rbx,0xedb900
0x2eca175041ee    ce  e9ad00e8ff     jmp 0x2eca173842a0      ;; code: STUB, CEntryStub, minor: 8
0x2eca175041f3    d3  4883ec08       REX.W subq rsp,0x8
0x2eca175041f7    d7  c5fb110424     vmovsd [rsp],xmm0
0x2eca175041fc    dc  e85ffeffff     call 0x2eca17504060     ;; code: STUB, DoubleToIStub, minor: 135876
0x2eca17504201    e1  4883c408       REX.W addq rsp,0x8
0x2eca17504205    e5  eb8f           jmp 0x2eca17504196  <+0x76>
0x2eca17504207    e7  90             nop


Safepoints (size = 8)

RelocInfo (size = 4)
0x2eca175041ef  code target (STUB)  (0x2eca173842a0)
0x2eca175041fd  code target (STUB)  (0x2eca17504060)

--- End code ---

  */