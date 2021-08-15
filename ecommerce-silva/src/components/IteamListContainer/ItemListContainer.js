import React, { useState, useEffect } from "react";
import { Card } from "reactstrap";
import Item from "../Item/Item";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting}) => {
  const [items, setItems] = useState([]);
  const products = [
    {
      id: "1",
      title: "table",
      price: "4000",
      picture:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUZGRgaGiEaGhkaHBwYGBoaGhoaGhoaGhgcIS4lHh4rIRwaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjQrJCU0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDE0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDE0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xABGEAACAQICBgcEBgcGBwEAAAABAgADEQQhBRIxQVFxBjJhgZGh8CKxwdETM0JScpIHI2JzgrLhFCRDY8LxFRY0oqOzw1P/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAiEQEBAAICAwADAQEBAAAAAAAAAQIRITEDEkETMlFxYSL/2gAMAwEAAhEDEQA/AItH6/EfvaP8wmx/Rf1Kn4m/9jzG4Y/rcR+8o/zCbH9F3Uq/iP8A7Kk449u+f61vgY3S6zcx7osHtjdE+0/Me6dXA/M1000XRxFHUqnVP+G4F2VzssPtXtmu8dtiNLIeMtdb225X47B35274vQ8E0hhTSYJUNRnpuCl7BTY3Isbk7B7Itvjuiyq4pBn7RBHabmxv+E+ct+nFNmxQCi5FUnhYBtt5XU6P95p3BDJUG0WNjYg99z5zhbqtWa6r2PRfUHreI9W2d3wjOiuoPW8R+rs9cJ0vQzmL668pKpjKRsV115fGSaeySB2AEJ0QC0UJyKAgFp0QE6IHZ2EBAJU6dpq2ohdUdidQNkHNhdQeOYtLaYn9Jh9ih+Nv5RN4T2sjl5r64WuujISrAgjcfWcRrSn0T0oyFPFA1E2LUH1id/2hzz57JrNG0KSqcR9KjoBdH2KLbS/AjZbdz2az8WWN5ebx2eTqgv8A2ZMzeq4yG0U1+frdnRY6g70arBSR9G5LHZ1GvmdpitIdJcMhJRWruftv7KX7ARsHLvmW030kxFWm4Z9VSjDUp+wttU5HeR2Emee3d5r6eE9cdSPWtB/9PR/dr/KJOkLQg/u9H92v8ok0zo5CB9evWyELwAQMCICB3uhOet0IHlWGP63E/vKP84mu/Rpr/R1dTV65vf8AHUmQw5/W4n95R/nWbL9F5/VVfx//AEqzH12y6ragv+x5zia12zW+V47eCEazd3um5duDgD/eXwlP0ixjUlGuNam4ZWZb6yXGRt9oeGyXutIelsKKtMoctYZHgciD3G0ZbuN12n+PDNJ6UqF1JOsWYAuc9YE+/t7REYTG3xKb9aoo/wC4WPfJel8IUdkIy1t2eqwO0dm+V/R3B3qrWc2RHRFvkz1CQqqF25XueGXbOHj1l3OU3L3OXuWiuoPW+SKuz1wMj6J6gkmpsPrcZ3vTbN4o+0vKSaZkTHH215fGP02kgkgxQMZDRYMB0ToiRFCAq87ATogcnROicgBjGOwSVkKVEDIdx53EfvOywZWv0FwrdUOn4WNvAxnC9D6lBi2HxJAO1Kia6P2MAR47Zr4TXtlrW3P8eO96m3nemOhdZzrU0pKftBXYKT+yhX2eV7cpmtIdEcaFYfQk3BF1ZSMxzntM7OfrO3WZVE0ZTKUaattVFB5gASVC07eaRwQhAwOzkBCB31tnZzw8f6QgeS4Q/rcT+8pfzLNl+jF/1VX8f+upMVgz+txP7yl7xNf+jN7JV4a3/wBKk52W9O2X61v1acXb67Y3r9onPpRxEsxycNEaR0nTooz1G1VQXYgE24XtvMyuO/SZhVA1EqufwhB4sfhNXWRXFnUMLg2IuLg3GW+xz7hK+roHCMQWwtG/7tQDzFrHvmpLB5JpvTYqVA6AqGb2kNmABOQJ478uEYw+FBxIsx9mqj6t/Zs7qDYcc/C3CSukWDVcU6UkVQHayKq9VQWOrlkQATlwjRZFq0lCe2aqEvrG+oHACFb222N9uQmccedt2fa9n0T1BPNummk6y4uqgrVEClQoR2Qappo2xSBtY59s9I0T1BPFv0jaW18dU1QbIdQZbfo/ZJ7faDdwE6xmdkvpKqdtaoebufjE/wDEKn/6v+dvnM6uKb7reBnRUc/YfwjTe2jp6VqIyv8ASOShDAF2N7bQbnYRl3z1hKgIBGwi45GeDoHYhSrKGIXWOxQTYsewbe6e3UnAAA2AW7hJYzVgrR1WkNKkkI8yh5TFCIBihAVCcvAQOzsSDOwCBhIuNxq0xdrbL+YFueeXHzlpJbdRKMJGw2OV81N13G2WWXeScrdkkyS7LLLqgTs4YSjpnIQvA7OWhCB2ETc+rwkHkWFB+lxP7yl7xNT+juoRTe332vs++1tvfM9h/okeszYmlao6Mur9IxApkE39i27tlj0e0zhsMrq1UuWYkaiMLXZj9q3GSSu2V4ejpX/a8/lONX/aPn8piqnTzDDYlQ9yj/VIz/pApjZQY82A/wBJmt1y1f43BqDj74nXHP1zmO0d0/w7kiqj0yDa/XXyz8pfjT+F1QwxCWPab+AEvJz1pgdL4rUx4cjL6azA26r+w4NrjqsZE0lT1MVSUH/EWx4j6QG/eDGulddXrO6MGVnuCN8kaUX9Zhn3Gogv2rUUEeflOc/ZcprT2HQ59gTxjT6la9YbxVf/ANjfKezaI6nd8DPJum1HVxeIW329bnrhXHvadEx7ZlzxbzHyjlNRxY8r/wCmCE8PP+kfpBjw8CfjNNVJpIpFrNs3hv8AVNrofGa1JCdoGqea+yfd5zHrkM3F+ywPneWeh8RYMt72a/5gPiDJWWzpV5NpVJnMNiJLxuJtRc8V1fzez8ZlGgFQDaQOZES+PpjbUQc3UfGed6g4QCiX1G+fS9Ef4qdzA+6O4XSCVL6jBrZG17Z8556ZpdAexSHFiWPfkPICLNDTK8XeQaVWS0aQcp4pGZ0V1Z0trqGBZNa+rrC9xex28JlumWCa30y02Or1yraylBvdLjZtuL+6QejzamNx7MwGu6lQSASDUrnIbeE0+kHD0XXPMDMGx2jfJcd8EtnV0y3RyhiS4cqqJe6lzrKygm2ql9bMbzbsM3iE2ztfsFh4XMq0qFiPW07e+WVJCNskmjdvZwCdhCaHAYGBEPXq0A9erwhCAet0J24nYHz9cQvJKaMqHcfCPDQtQ7QRzy98uq7bivJiC0tBoVj1nUfxL84oaHQdaqo77+6NG4odezGT6LXU+uMkV9HUtq1c+wH4iJw2DOYDpbdrXX4EeclJdc01iD7A5n3mW9fFZJTIuDUV1PBkqAnuK63eBGH0QxUKXUb7gEjPwkx9HBmRi/UN7au0hg22/ZMyJlZY9g0P1B63GedfpERP7UzM6qSqixuDkpzHs2PWt1hsPfaUellRFsqJ3hj7mExvTPHPinDuF1lXUGqLC2sW3k72M6RyU707HeR2Eyy0Now1qlOndENTW1C97EIGLG4ByGqdpEzSO65BiBwljoXSVSk6HVFVA2sab5qbjVYqT1SVuDuINiCJV5b9eiJNVsOmKoGuqh2p+0pCGwBNgeI/MOImGZXfEOi1Shp3VihOqSjFdl7EXJ2zdaP0vhaDNUpa7sKfsoykNrhBTUsyuEKaihdUoSueqQLKMrTLFCNY3P2gSDfbfK2clqTk9hsbXpka96i8UBYkdoGasPA+6/0hiQUVQdrXPcP6jwmV+nxq7Ky1QNgcWPis7U086gB8PZ8ybOAhudxzOwCSdi5BiQmZOd+eXhKFtP1DspIOblvcojDaar8aY5Ix97zaNI5liulmUBVVbAAC9zsymJw2lqpdddgykgFdVQB2ggX8TNBe8zlWsYtxp2tuKjkvzvIuktMYpkISrmSLggAEbxdAD5yIoMVqmZa1GUStXasrFF9h1LgGwOq17cuyekYbTGvTZHAQsOsXWwsQftWucrd8zWEREZi6KwJ3synuIPwj2Proy2RFUdjM3mTNbY02eF0zQ1yWcqN1wbeKgiXVHSVF+rVQnhrKD4XvPK6uk6Sj2nA5kD3kSOdPURsYNyN/5QZNGo9mGecJ4sOlATNNYdq3B96zT9G9P1XZHes2ob3QgNfaBdzmNxy4RrSvQrQtG6VUMLiOASI7acnZyB20JzVEIHhz4xztdvGNNVPE+MYZ1H3jzI+AEZbEKOH5mPxmdvTwlO/bGzUA2kSP/aV4L+UH3idGLI2A92UhuH9fgCeQJ904Cb53Btvy3jdI5xDnYD3mLpE31nB1d4U2PcSDCbidQxZQZPY32G1vy7pPoaUH2x/EuY8No84xhMLhn6tyfusxDeA290NM0kpUtZEFwwvmb2zBzPdNzbjlra0SqrC6sDy+I3SBjBe8o6OkEJuG1W7cj3GTVx5OTEHtIz8ptJYjNRzj+Fp2YGDV14H13yM2kSNieJA9wk0m2iwLIHJdWItaysFPiVPhJtd8NayUqin7zVFHiuoRbkRMc2kahvbVFgT9o/GQ2x9U/bA5KPjeNG2y11G1l8RK3Seq9rMMufymaeu52u3cbe6Nsl9pJ5kn3xqG1s2ovWdB35+do21ekPtk8lJ8xeVuoo4CP4agzmyI7neERnP/AGiUSRjKYNwrnw+NpLbpBU2KgHO39YvD9GcY4uuFq/xhaf8AORFt0cqJlVr4SieD11LflS8mjaG+mcQftW9dlow+NrNtc+/33loNG4VTZ8eDxFGg7+DtZYpRo9fs4ur+JqdJT+W7CVVKaj73buOr7pGqkfaa/wCI3980Q0jhl6mApc6r1K/kWUeUP+ZnQfq0oUf3dGmp8WUmEUeH0dVf6uhUcbtSm7g8iqyenRbGDM0Sg41Gp07DiQ7A+UVW09jMQdUYjEOfuozbO1afyjf/ACxjHu7Yepnteran2ZtVIPjAhYmiabFS6PbejB0zF8mGRmw0G1gnKY3FYRqbFGKaw26jq4zF7ay3F+M2OhNi8pnIek6IxXsgS4R7zMaNbIS9oPMiZOkRKmKBlHL9kJ2Euh4OmgWO7OPp0fO8eu2boYVTsH9IGlbIgX988F82T1ekY9Oj3Z67JJTQgG0XHH5zUIg9bRHTQFrj1zmfyZVfWM4ugl2gSJpvR4Sg7WzBXPm6j4zW0qI7QeG7ulZ0qp/3ap2anPrpLhllcp/qWTVee6scxFV3QozEjicyO/bOWgRPft59KWvhWXaMuI2RFOuy7Dlw2iXZEQmDRrkrs4EgbeyalS4oVHH325e6O1K6axs1+QJkwUUGymneNb3xwVCNlhyAEbPWoVNiQbU3N1IBtYXO+5jC4J99hzb5SxZyd8Sd8bX1M4fCjWUMwYXzCkgns1rZc7GWjaRwCH2NHs5H2quIe1+JRBYjskCh1hzk9sBgkJ18ez8Uo0GJ5Co51b90sZs04vSV1N6WFwdLgy0AzD+JyfdGq/SvGsCDinUcEC07ciigjnHTjNGoPYwuJrHjWrCkP/D67Yn/AJjCn9TgcJTtsLUzWcduu5zPdAqmxFSudUvVrH7us9U+BJllhuimMYXXCOo4vq0gOeuRCr0qxzC39odBwphaQHLUUHzlTicUz/W1Xf8AGzP/ADEwLpujzIbVcVhKRG1TV13H8KKffBcHglzfGVanFaNDUPc9Zrd9pX4HRdepYUsPUcbiqNq/mIC+csW6L4lBer9DQHGtWRPJSxgK+mwCj2cLWqnjWxBQ/loi3dfviRpwIf1eFwiW6p+h13Hbr1Ga57bRo6Nwy9fHKTtK0KL1AewVHKr3+U79No9B7OHxNY/51ZaQ7hRBPcT3wGsV0oxjAr/anVeFPVpD/wAarKoirXb/ABK7fx1Tn4y1bT+p9ThcLTt1W+j+lcfx1C1z22kbF9JMU4s2JcD7qEU18ECiEQ8RhHpko6FGG1WyIuLjLkRNnoXYvKYd9Y3LaxJ2lrk95Oc3GhtizOSttgDkJeYZpQYA5CXmGMzBYoYsRtDHJQQhresoQMlRXO2w9sdenx2e6KqU9bMdYb+P9Z2m98jtnzdPZtEdLfAx6iw2HI+UcZbbrjhGWS3aJOg41P18pU9JhfDVb8BnydTLam99vcZA6SL/AHar+Db3iaw/aJl080hFTk+g4OWnaWxuXxnIpN/KWJSTA7J0zhlUmFoq0N0BNEe0OYjmG6O4qqTqYaq2e1l1FPJ3sD3GIpD2hzEZxuPquSKlao4zGq7sy24BSbW7ppjJZv0VqJ9fiMLQ7Hqhn7kQHWPIxk4TAJ18ZVqkfZoUNTweqbEdtpT4XDFyVpIzneKaM5z2XCgy5o9EcWRrPSWin367pTHeCdYeEIP+JYFOpgGqEfbxFc5ntpoNUwHSist/oKeHw/7qiobvZg15w6Jw1P63SFMneuHR6/dr5KIkYrR6dXD4iuf86otJOYFIX7iYETG6dxNT6zE1WHDXZV/KpA8ozg9HVahvSoVKl/tIjMDnvYC3eTLI9JnT/p8NhsPwZKavUH8b3v4SFidO4msdV8RVcnIIrMAewIlgfCBOboxiFF6z0MOP86sik8lTWPdtyjRwWET6zGPUI+zQokX5VKpA8o3hOjGKcaww7Iu96lqK8/bsT3Ax7/gNNPrsZSX9mirV28RqqD3wEf27Bp1MG9U/exFY+dOkACO+NN0lqj6taGHH+VSRT+dgW84s1sChyo4iuf8ANdaK8wtMFu4mB086/U0aFC2wpTV376j6xPlCKyviHqMXd2dm2sxuTkBt5AeE2uiNi8pja9d3cu7FmY3LHadg+E2mhhdV5D3TOSthgBkJeYaU2AGQl1hhMwTqcdBjdOLEo73QhCBnFyNjs3GKqU75jb7+2N0m+yf9+2OU3sbGfNl3HrCG/OJVL/ER96W8ZcYll8fWRjSbRHplTcbOEj6aTXw1VUBLFDZRmb9nGWRz27ffGBTAN8/dE/8AN3F7eSmcM3PSfRVKpd1YU6nH7L/j7e0ecwzqQSDtHf5ie7DKZTbjZq6ciqW/kYm87SO3kZ0iUGdtOGK3QpG6E6dkSY2O0x7Q5yV/x+lTyo4DDKwOb1Q2IYkbWGuRqm+fASIhzHMScMHgEzdsTWY5kKEo07napJu2XEcO6XemMoiYvpZjHBDYl0X7tO1JR2DUANuZlZRw1Wu10SpWbYWVWqHvbPzmlp6Wo07fQYKghH2nBruDxDPs8IjFdIMS+TVntwQ6i8tVLCLlE9aiU+iGIteoKdBeNeoqnuVdY+IEcGhMKn1mLep+zQp2/wDJUNj4SIQSb7+O+H0JMzcj1WC1sHT+rwgc7nxDtU8aa6qwfpJXA1UK0V+7RVaSjlqi/nISYVuF4+mAJmbn/wBa9UGviHc3Z2c8WJY+JzjJBMvE0QTsF5Kp6HO8W8pm5xqRmP7OTuihgDy8xNamiV4+AnWwAH2e/fM/k0ejGthXG647JsdCiyprC3sjtGyR2wOeQl1haFlXlyMmXm44XHxy9tLgACoINx2S4oTG08jcEg8QdU+IlrhtK1E2hXH5W/MMvKMfPj9MvDfjUU46JUYXTlJsmJQ/t5D82zxtLZWuLggg7xs8p2xymXVcrjZ3CoTl4TSMuMxfYR5H5RZ9odvrK8QRY347e0QOWYz+I+c+ZHsP0au7eI8c5DdftCPUql+fvllSm3S2Y8ItHDDt9ZGOsL5iRqiHaNsUip0zhNcETBY/BMjHhPUXUMO31tlRj9HB75Zzt48/VjLHbzhWvF0TmeRlnpTQrKdZJUJU1T7YttnqxymXTleOzhigZHbGJsAJ8h84pqrbrDzPiZvRs8FJ3QZRvIHmfKRc2NixPfl4SxTAHhlM5WYk3UbXAOVz5CJSmSZd4bRV915a0NCeE55eSL6szSwLHdJtLRx3zVYfRoXt8pPpYNbZAd/rKc75GpiylLQ/ZJlLQ9totNKmFI2bOE6KV+fD1tnO+VuYqRNEr/tJA0av3e+W6UwOz3RxB3TPvavqqkwpHaOzI+UeSgp2j4GWZog5gxAp55rf14TO6cILYJT6zjTYS0uPowdluUbdI5VSVMKDtEfGHyA7Nh+cmNQO7PntjezI5dhkvKxCenbs57IgMR2eYlkE4X+EZqUuItymdNbRde+0X7RFUHZDdHKnsNh3jYYl6G8eI2xrWI9WMS6XtbLp2uN6n+H5Gclb9KvA+cJv8mf9Z9J/FxT3jhs+UWgzt69ZxFLrEdl4pOt64f7TMSuU2s1txFxEuNVhb16vA5Ovh8J3EDZ62iSiSjb+MKgiEPs+ucXU2Hx9eE2iM4tYiDKGHbtE7UGz1snaezxHrwEk7Kq8TRBGyZvH6OQnZNZWXaOBlLiUzM645aqWbjGY3RygkCN4bCmo1r2AFr77y80hR9qIw1HVnpmd05evJnD6JS4vrHvt7rTR0MKAdmUgomcuwm/vnHPK2N4yFphQuYk6hTFrjvG71tjarcDlbwjuEO7iPd6M8++W9JQpA2MSU3745S2coMMz4iVIEaLKBtvjG0Ofrf8A1ix67oUzvAO/LvHv3+EU66o49nyjrJYk949ePjG6pv3iTWodu61sxHA19sYpG68so5T9cxEu4aDJBW3HOOPx74zax9btkoW4tyiWAIzF/XGLbMecQh+Xy+PlAjVqWpmpM5Sqa23lJDrdSN48ctnlICGzEccxM3irCqtPORWXiJOqZ2PH3iRKw9e+MosMNR5zseV+2Ewu1gmTjtFvCKbaPW+JfrDmffF1PXeLzU+sk1xnfgf6zuIGXhCt678p1xdeY+Et+gw5y8I+DkPCRcMcjy+Mkr8fXvlnUS9mTs9coikdvrs+EcbePXGNptiKYrr7RHEf0lVXXPn6+EusQNh9ZypxS5981UUuPp7OyNKksMYm2RgvunbfDH0tF2GXqJl5Soors5y9ojI+PrwmMq1C6I9nlnO0/ZY8792/4xVIZ2iX3TlWk1MmI7L/AAMH3Htz90Qn2Sduw+6OsNokQ0Rn65x6mL5xu1+/4f7x8tYet81jEtIxJy5ZHv2edpEBvyXfxPDzkoLcEcR58fXCNFQNmzaPjJeeVhFPJiNxjg9d22MVsrHgfXwkkn5xP4U4wyPjG29d2YjifG3ryiCNolBTbwiCLG3rsiky8ffCqICdjX3EZ9h3SDjUsbjcb90mkXHmI3iVuoMmU4IZRri3EXEacfON4d7ZfdMk1Rn5yS7jSBCPMnOdmdUTqu3v+UU/x+AhCX+oU+wd0E6o7oQlSmMJt9cJNTYefyhCMeoU03WPL5Rpet3j3GEIUV9nf85VY7YeY+E5CbvSRExPrwkEdYcp2E6Y9M/Umh68ZoMN1h3+8QhM5fFgTaO6dPXX8R/lMITm0mVd/P4CLO2EI+oapdbu+cWd/KEJr4gXb3wq/E/GEJmLEat1e4RzD9VeXwhCPocT4D3GdfbOwlDbfAxdTZ4TsJIGU3d/wiT1W5GEJYKxeueUlvsEITGLdNiEISo//9k=",
    },
  ];
  const getProducts = () => {
    const getList = (id = null) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const product = products.find((product) => product.id === id);
          if (product != null) resolve(product);
          reject({
            status: 404,
          });
        }, 2000);
      });
    };

    const myPromise = new Promise(async (resolve, reject) => {
      const product = await getList("1").catch((err) => reject(err));
      const arrayProduct = products.map((x) => x);
      product ? resolve(arrayProduct) : console.log("not product");
    });

    myPromise
      .then((result) => setItems(result))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProducts();
  }, []);
  console.log(items);

  return (
    <>
      <Card>{greeting}</Card>
  
      <ItemList items={items}/>
    </>
  );
};
export default ItemListContainer;